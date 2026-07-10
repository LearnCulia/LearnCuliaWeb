const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({maxInstances: 10});

exports.resetPassword = onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "https://learnculia.com");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).send("");
  if (req.method !== "POST") {
    return res.status(405).json({error: "Method not allowed."});
  }

  const {code, newPassword} = req.body;
  if (!code || !newPassword) {
    return res.status(400).json({error: "Missing code or password."});
  }

  const db = admin.firestore();
  const snapshot = await db
      .collection("passwordResetTokens")
      .where("code", "==", code)
      .limit(1)
      .get();

  if (snapshot.empty) {
    return res.status(400).json({error: "Invalid or expired code."});
  }

  const docSnap = snapshot.docs[0];
  const {email, expiresAt} = docSnap.data();

  if (new Date() > expiresAt.toDate()) {
    await docSnap.ref.delete();
    return res.status(400).json({
      error: "Code has expired. Please request a new one from the app.",
    });
  }

  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().updateUser(user.uid, {password: newPassword});
    await docSnap.ref.delete();
    return res.status(200).json({success: true});
  } catch (err) {
    return res.status(500).json({
      error: "Failed to reset password. Please try again.",
    });
  }
});

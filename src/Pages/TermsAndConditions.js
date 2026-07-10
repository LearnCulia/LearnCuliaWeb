import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../GlobalState";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#008552", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
  },
});

const Section = ({ title, children, mode }) => (
  <Box sx={{ mb: 4 }}>
    {title && (
      <Typography sx={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", fontWeight: "bold", mb: 1.5, color: mode === "dark" ? "#6bffc6" : "#008552" }}>
        {title}
      </Typography>
    )}
    {children}
  </Box>
);

const P = ({ children, mode }) => (
  <Typography sx={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.9, color: mode === "dark" ? "#ddd" : "#333", mb: 1.5 }}>
    {children}
  </Typography>
);

const TermsAndConditions = () => {
  const [mode] = useGlobalState("darkMode");

  return (
    <ThemeProvider theme={theme}>
      <div style={mode === "dark" ? { backgroundColor: "#242430", color: "#ffffff", minHeight: "100vh" } : { backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh" }}>
        <NavBar />
        <Box sx={{ maxWidth: 820, mx: "auto", px: { xs: 3, sm: 6 }, pt: "120px", pb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", mb: 1 }}>
            Terms & Conditions
          </Typography>
          <Typography sx={{ color: mode === "dark" ? "#aaa" : "#666", mb: 6, fontSize: "0.95rem" }}>
            Last updated: September 23, 2023
          </Typography>

          <Section mode={mode}>
            <P mode={mode}>Welcome to LearnCulia!</P>
            <P mode={mode}>
              These terms and conditions outline the rules and regulations for the use of LearnCulia.
            </P>
            <P mode={mode}>
              By using this app we assume you accept these terms and conditions. Do not continue to use
              LearnCulia if you do not agree to take all of the terms and conditions stated on this page.
            </P>
            <P mode={mode}>
              The following terminology applies to these Terms and Conditions, Privacy Statement and
              Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person
              logged on to this website and compliant to the Company's terms and conditions. "The Company",
              "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
              refers to both the Client and ourselves. All terms refer to the offer, acceptance and
              consideration of payment necessary to undertake the process of our assistance to the Client
              in the most appropriate manner for the express purpose of meeting the Client's needs in
              respect of provision of the Company's stated services, in accordance with and subject to,
              prevailing law of Netherlands. Any use of the above terminology or other words in the
              singular, plural, capitalization and/or he/she or they, are taken as interchangeable and
              therefore as referring to the same.
            </P>
          </Section>

          <Section title="License" mode={mode}>
            <P mode={mode}>
              Unless otherwise stated, LearnCulia and/or its licensors own the intellectual property
              rights for all material on LearnCulia. All intellectual property rights are reserved. You
              may access this from LearnCulia for your own personal use subject to restrictions set in
              these terms and conditions.
            </P>
            <P mode={mode}>You must not:</P>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              {[
                "Republish material from LearnCulia",
                "Sell, rent or sub-license material from LearnCulia",
                "Reproduce, duplicate or copy material from LearnCulia",
                "Redistribute content from LearnCulia",
              ].map((item) => (
                <Typography key={item} component="li" sx={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 2, color: mode === "dark" ? "#ddd" : "#333" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Section>

          <Section title="Comments" mode={mode}>
            <P mode={mode}>
              Parts of this app offer an opportunity for users to post and exchange opinions and
              information in certain areas of the website. LearnCulia does not filter, edit, publish or
              review Comments prior to their presence on the website. Comments do not reflect the views
              and opinions of LearnCulia, its agents and/or affiliates. Comments reflect the views and
              opinions of the person who posts their views and opinions. To the extent permitted by
              applicable laws, LearnCulia shall not be liable for the Comments or for any liability,
              damages or expenses caused and/or suffered as a result of any use of and/or posting of
              and/or appearance of the Comments on this website.
            </P>
            <P mode={mode}>You warrant and represent that:</P>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              {[
                "You are entitled to post the Comments on our App and have all necessary licenses and consents to do so.",
                "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party.",
                "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy.",
                "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
              ].map((item) => (
                <Typography key={item} component="li" sx={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 2, color: mode === "dark" ? "#ddd" : "#333" }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Section>
        </Box>
        <Footer mode={mode} />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default TermsAndConditions;

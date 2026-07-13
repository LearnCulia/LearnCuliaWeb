# LearnCulia Web

The official website for **LearnCulia** — a mobile app designed to help people with dyscalculia build mathematical confidence through structured games, AI-powered tutoring, and progress tracking.

---

## What is Dyscalculia?

Dyscalculia is a learning difference that affects a person's ability to understand numbers and perform mathematical operations. LearnCulia provides a supportive, gamified environment to help users overcome these challenges at their own pace.

---

## About the App

LearnCulia is a mobile app built with React Native and Expo. The website serves as an informational hub about the app and its features.

### Features

- **6 Math Games** — Counting, Addition & Subtraction, Multiplication, Reversing Math Equations, Comparisons, and Arranging Numbers. Each game has a normal mode and a challenge mode (unlocked after completing normal mode).
- **CuliaBot** — An AI chatbot (RAG-powered) that answers questions about dyscalculia, explains game concepts, and gives personalized tips. Backed by Groq's llama-3.3-70b-versatile and HuggingFace embeddings stored in Supabase pgvector.
- **Badge System** — Users earn badges as they complete games and challenges.
- **Profile** — Tracks games completed, badges earned, and personal info with a customizable avatar.
- **Dark Mode** — Full dark/light mode support with customizable app accent colors.
- **Contact / Suggest** — Users can send messages directly to the developer.
- **Authentication** — Email/password auth via Firebase with persistent login.

---

## Tech Stack

### Website
| Technology | Purpose |
|---|---|
| React | Frontend framework |
| Firebase | Backend and authentication |

### Mobile App
| Technology | Purpose |
|---|---|
| React Native + Expo SDK 53 | Mobile framework |
| Firebase Auth | User authentication |
| Cloud Firestore | User data, badges, contact messages |
| Brevo (formerly Sendinblue) | Transactional emails |
| EAS Build | Cloud builds via Expo |

### RAG Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| Groq (llama-3.3-70b-versatile) | Chat completions |
| HuggingFace Inference API | Text embeddings (`all-MiniLM-L6-v2`, 384 dims) |
| Supabase (pgvector) | Vector similarity search |
| Render | Backend hosting |

---

## License

Private — all rights reserved.

<p align="center">
  <h1 align="center">Synrai</h1>
  <p align="center">
    <strong>One platform for messaging, calling, meetings, and collaboration.</strong>
  </p>
  <p align="center">
    <a href="#-features">Features</a> •
    <a href="docs/features.md">Full Feature List</a> •
    <a href="docs/techstack.md">Tech Stack</a> •
    <a href="docs/architecture.md">Architecture</a> •
    <a href="docs/database.md">Database Design</a> •
    <a href="#-development-roadmap">Roadmap</a>
  </p>
</p>

---

## Vision

Synrai is a **modern real-time communication platform** that enables individuals, teams, and organizations to communicate seamlessly through **messaging, voice calls, video calls, and online meetings**.

The goal is to build a **secure, scalable, and high-performance** communication platform that combines the best aspects of **WhatsApp, Discord, Slack, Telegram, and Google Meet** into a single ecosystem.

---

## Target Users

| Audience                   | Use Case                                      |
| -------------------------- | --------------------------------------------- |
| 👤 Individuals             | Personal messaging & calls                    |
| 🎓 Students                | Study groups, virtual classrooms              |
| 💻 Developers              | Team collaboration, code discussions          |
| 🏢 Businesses              | Internal communication, client meetings       |
| 🚀 Startups                | Lean team coordination                        |
| 🌍 Remote Teams            | Distributed workforce communication           |
| 🏫 Educational Institutions| Virtual lectures, student-teacher interaction  |

---

## ✨ Features

| Module            | Highlights                                                              |
| ----------------- | ----------------------------------------------------------------------- |
| **Authentication**| Register, Login, JWT, Refresh Token Rotation, Email Verification        |
| **Messaging**     | Private & Group Chat, Reactions, Replies, Typing Indicators             |
| **Voice Calls**   | 1-on-1 & Group Calls, Mute, Noise Suppression                          |
| **Video Calls**   | HD Video, Screen Sharing, Camera/Mic Toggle                             |
| **Meetings**      | Instant & Scheduled, Waiting Room, Recording, Host Controls             |
| **File Sharing**  | Images, Videos, PDFs, Documents, ZIP, Audio                             |
| **Notifications** | Push Notifications, Missed Calls, Mentions, Meeting Invites             |
| **Search**        | Search by Username, Email, Groups, Messages, Files                      |
| **Presence**      | Online, Offline, Busy, Away, Invisible                                  |

> 📖 See [docs/features.md](docs/features.md) for the complete feature breakdown.

---

## 🛠️ Tech Stack (Overview)

| Layer       | Technologies                                           |
| ----------- | ------------------------------------------------------ |
| Frontend    | React, Vite, Tailwind CSS, React Router, Axios         |
| Backend     | Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt    |
| Real-Time   | Socket.IO, WebRTC                                      |
| Deployment  | Nginx, PM2, Docker, Cloudflare Tunnel                  |

> 📖 See [docs/techstack.md](docs/techstack.md) for the full technology breakdown and security details.

---

## 📁 Project Structure

```
synrai/
│
├── frontend/              # React Frontend
├── backend/               # Express Backend
├── docs/                  # Documentation
├── docker/                # Docker files
├── scripts/               # Utility scripts
├── .github/               # GitHub workflows
├── LICENSE
├── README.md
└── docker-compose.yml
```

> 📖 See [docs/architecture.md](docs/architecture.md) for detailed backend and frontend architecture.

---

## 🗺️ Development Roadmap

### Phase 1 — Foundation
- [x] User authentication
- [x] User profiles
- [x] Private messaging
- [x] Real-time messaging

### Phase 2 — Communication
- [ ] Group chats
- [ ] File sharing
- [ ] Voice calls
- [ ] Video calls

### Phase 3 — Collaboration
- [ ] Video meetings
- [ ] Screen sharing
- [ ] Meeting scheduling
- [ ] Participant management

### Phase 4 — Productivity
- [ ] Notifications
- [ ] Search
- [ ] Rich message formatting
- [ ] Presence improvements

### Phase 5 — Intelligence & Scale
- [ ] AI-powered features
- [ ] End-to-end encryption
- [ ] Desktop and mobile apps
- [ ] Enterprise administration
- [ ] Analytics and monitoring

---

## 🔮 Future AI Features

| Feature               | Description                          |
| --------------------- | ------------------------------------ |
| AI Chat Assistant     | In-chat AI helper                    |
| Meeting Summary       | Auto-generated meeting notes         |
| Voice Transcription   | Real-time speech-to-text             |
| Message Translation   | Translate messages across languages  |
| Smart Replies         | Context-aware reply suggestions      |
| AI Search             | Intelligent search across all data   |

---

## 🏗️ Future Scalability

As the platform grows, the following will be introduced:

- **Redis** — Caching, online presence, and Socket.IO scaling.
- **SFU (LiveKit / mediasoup)** — Efficient group voice/video calls.
- **Object Storage** — Media and meeting recordings.
- **Microservices Architecture** — Independent service scaling.

---

## 🎯 Project Goal

Synrai aims to be **more than a chat application**. It is envisioned as a **complete communication and collaboration platform** where users can message, call, meet, share files, and work together securely in real time.

By combining modern web technologies with a scalable architecture, the platform is designed to evolve from a simple messaging app into a **full-featured ecosystem** suitable for personal, educational, and professional use.

---

## 📄 Documentation

| Document                                      | Description                        |
| --------------------------------------------- | ---------------------------------- |
| [features.md](docs/features.md)               | Complete feature breakdown         |
| [database.md](docs/database.md)               | Database schema & design           |
| [techstack.md](docs/techstack.md)             | Technology stack & security        |
| [architecture.md](docs/architecture.md)       | System & code architecture         |

---

## 📝 License

This project is licensed under the terms of the [LICENSE](LICENSE) file.

---

<p align="center">
  Built with ❤️ by the Synrai Team
</p>

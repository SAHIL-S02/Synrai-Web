# 🛠️ Synrai — Tech Stack

> Complete technology breakdown and security details for the Synrai platform.

---

## Overview

Synrai is built on the **MERN stack** (MongoDB, Express.js, React, Node.js) with **Socket.IO** for real-time communication and **WebRTC** for peer-to-peer voice/video calls.

---

## Frontend

| Technology      | Purpose                                          |
| --------------- | ------------------------------------------------ |
| **React**       | UI component library for building the interface  |
| **Vite**        | Fast build tool and development server           |
| **Tailwind CSS**| Utility-first CSS framework for styling          |
| **React Router**| Client-side routing and navigation               |
| **Axios**       | HTTP client for REST API communication           |
| **Socket.IO Client** | Real-time WebSocket communication on the client |

---

## Backend

| Technology       | Purpose                                         |
| ---------------- | ----------------------------------------------- |
| **Node.js**      | JavaScript runtime for the server               |
| **Express.js**   | Web framework for building REST APIs             |
| **MongoDB**      | NoSQL document database for data storage         |
| **Mongoose**     | MongoDB ODM for schema modeling and validation   |
| **Socket.IO**    | Real-time bidirectional event-based communication|
| **JWT**          | JSON Web Tokens for stateless authentication     |
| **bcrypt**       | Password hashing library                         |
| **cookie-parser**| Parse HTTP cookies for session management        |
| **cors**         | Cross-Origin Resource Sharing middleware         |
| **Morgan**       | HTTP request logger for development/debugging    |

---

## Real-Time Communication

| Technology    | Purpose                                            |
| ------------- | -------------------------------------------------- |
| **Socket.IO** | Real-time messaging, typing indicators, presence   |
| **WebRTC**    | Peer-to-peer voice and video calls                 |

---

## Deployment

| Technology             | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| **Nginx**              | Reverse proxy and static file serving       |
| **PM2**                | Node.js process manager for production      |
| **Docker**             | Containerization for consistent deployments |
| **Cloudflare Tunnel**  | Secure tunnel for development environments  |
| **Linux Server**       | Production hosting environment              |

---

## 🔒 Security

Synrai implements multiple layers of security to protect user data and communications.

### Authentication & Authorization

| Measure                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| JWT Authentication     | Stateless, token-based auth for API requests          |
| Refresh Tokens         | Long-lived tokens for seamless session renewal        |
| Refresh Token Rotation | New refresh token issued on every use                 |
| HTTP-only Cookies      | Tokens stored in HTTP-only cookies (not accessible via JS) |
| Password Hashing       | Passwords hashed with bcrypt (salted)                 |

### Network & Transport Security

| Measure              | Description                                             |
| -------------------- | ------------------------------------------------------- |
| CORS Protection      | Restrict cross-origin requests to trusted domains       |
| Helmet               | Set secure HTTP headers automatically                   |
| Secure HTTP Headers  | `X-Content-Type-Options`, `X-Frame-Options`, `HSTS`, etc. |
| Rate Limiting        | Prevent brute-force and DDoS attacks                    |

### Input & Data Security

| Measure              | Description                                             |
| -------------------- | ------------------------------------------------------- |
| Input Validation     | Validate and sanitize all user input on the server      |
| XSS Protection       | Prevent cross-site scripting attacks                    |
| CSRF Protection      | Cross-site request forgery protection (cookie-based auth)|

---

## 🔮 Future Scalability Stack

As Synrai scales, the following technologies will be introduced:

| Technology                    | Purpose                                          |
| ----------------------------- | ------------------------------------------------ |
| **Redis**                     | Caching, online presence, Socket.IO adapter for horizontal scaling |
| **LiveKit / mediasoup (SFU)** | Selective Forwarding Unit for efficient group voice/video calls    |
| **Object Storage (S3 / R2)**  | Scalable storage for media files and meeting recordings            |
| **Microservices Architecture**| Independent scaling of auth, messaging, calls, meetings services   |

---

## Stack Diagram

```
┌──────────────────────────────────────────────┐
│                   CLIENT                      │
│  React + Vite + Tailwind CSS + React Router   │
│         Axios (HTTP) + Socket.IO (WS)         │
└───────────────────┬──────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────┐
│                   SERVER                      │
│       Node.js + Express.js + Socket.IO        │
│   JWT Auth │ Helmet │ CORS │ Rate Limiting    │
└───────────────────┬──────────────────────────┘
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
┌──────────────┐    ┌──────────────────┐
│   MongoDB    │    │     WebRTC       │
│  (Mongoose)  │    │  (Voice/Video)   │
└──────────────┘    └──────────────────┘
```

---

<p align="center">
  <em>See the <a href="../README.md">README</a> for project overview and roadmap.</em>
</p>

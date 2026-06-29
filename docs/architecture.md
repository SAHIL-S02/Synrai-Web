# 🏗️ Synrai — Architecture

> System architecture, backend structure, and frontend organization for the Synrai platform.

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        CLIENT                            │
│              (React + Vite + Tailwind CSS)               │
│                                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐  │
│  │   Auth   │ │   Chat   │ │  Calls   │ │  Meetings  │  │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐  │
│  │ Contacts │ │ Settings │ │ Profile  │ │   Notifs   │  │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘  │
└──────────────────────┬──────────────────────────────────┘
                       │
            ┌──────────┴──────────┐
            │ HTTP (Axios)        │ WebSocket (Socket.IO)
            ▼                     ▼
┌─────────────────────────────────────────────────────────┐
│                     EXPRESS API                          │
│                                                          │
│   ┌──────────────────┐      ┌──────────────────┐        │
│   │    REST API       │      │    Socket.IO      │        │
│   │  (Controllers)    │      │   (Event-based)   │        │
│   └────────┬─────────┘      └────────┬─────────┘        │
│            └──────────┬──────────────┘                   │
│                       │                                  │
│            ┌──────────┴──────────┐                       │
│            │     SERVICES        │                       │
│            │                     │                       │
│            │  • Authentication   │                       │
│            │  • Messaging        │                       │
│            │  • Calls            │                       │
│            │  • Meetings         │                       │
│            │  • Users            │                       │
│            │  • Notifications    │                       │
│            └──────────┬─────────┘                       │
│                       │                                  │
│                       ▼                                  │
│              ┌─────────────────┐                        │
│              │    MongoDB       │                        │
│              │   (Mongoose)     │                        │
│              └─────────────────┘                        │
└─────────────────────────────────────────────────────────┘
```

---

## Backend Architecture

### Request Flow

```
Client Request
      │
      ▼
  Express App
      │
      ├── Middleware Pipeline
      │     ├── cors
      │     ├── helmet
      │     ├── morgan (logging)
      │     ├── rate limiter
      │     ├── cookie-parser
      │     ├── body parser
      │     └── auth middleware (JWT verification)
      │
      ├── REST API Routes ──────► Controllers ──► Services ──► Models ──► MongoDB
      │
      └── Socket.IO Events ────► Socket Handlers ──► Services ──► Models ──► MongoDB
```

### Backend Directory Structure

```
server/src/
│
├── config/           # Configuration files (database, environment, etc.)
│   ├── db.js         # MongoDB connection setup
│   └── env.js        # Environment variable validation
│
├── controllers/      # Route handlers — request/response logic
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── chat.controller.js
│   ├── message.controller.js
│   ├── call.controller.js
│   ├── meeting.controller.js
│   └── notification.controller.js
│
├── middleware/        # Express middleware
│   ├── auth.middleware.js       # JWT token verification
│   ├── error.middleware.js      # Global error handler
│   ├── validate.middleware.js   # Request validation
│   └── rateLimit.middleware.js  # Rate limiting
│
├── models/           # Mongoose schemas and models
│   ├── User.model.js
│   ├── Chat.model.js
│   ├── Message.model.js
│   ├── Call.model.js
│   ├── Meeting.model.js
│   └── Notification.model.js
│
├── routes/           # Express route definitions
│   ├── auth.routes.js
│   ├── user.routes.js
│   ├── chat.routes.js
│   ├── message.routes.js
│   ├── call.routes.js
│   ├── meeting.routes.js
│   └── notification.routes.js
│
├── sockets/          # Socket.IO event handlers
│   ├── chat.socket.js
│   ├── call.socket.js
│   ├── meeting.socket.js
│   ├── presence.socket.js
│   └── notification.socket.js
│
├── services/         # Business logic layer
│   ├── auth.service.js
│   ├── user.service.js
│   ├── chat.service.js
│   ├── message.service.js
│   ├── call.service.js
│   ├── meeting.service.js
│   └── notification.service.js
│
├── utils/            # Utility functions and helpers
│   ├── token.js      # JWT token generation/verification
│   ├── hash.js       # Password hashing utilities
│   ├── email.js      # Email sending utility
│   └── response.js   # Standardized API response helper
│
├── validators/       # Request validation schemas
│   ├── auth.validator.js
│   ├── user.validator.js
│   ├── chat.validator.js
│   └── meeting.validator.js
│
├── lib/              # External library wrappers and integrations
│   └── socket.js     # Socket.IO initialization and configuration
│
└── server.js         # Application entry point
```

### Layer Responsibilities

| Layer          | Responsibility                                                |
| -------------- | ------------------------------------------------------------- |
| **Routes**     | Define API endpoints and map them to controllers              |
| **Controllers**| Handle HTTP request/response — parse input, call services     |
| **Services**   | Contain business logic — orchestrate operations               |
| **Models**     | Define data schemas and interact with MongoDB via Mongoose    |
| **Middleware** | Cross-cutting concerns — auth, validation, logging, errors    |
| **Sockets**    | Handle real-time events for messaging, calls, presence        |
| **Validators** | Validate and sanitize incoming request payloads               |
| **Utils**      | Shared helper functions used across the application           |

---

## Frontend Architecture

### Frontend Page Structure

```
client/src/
│
├── pages/
│   ├── Auth/              # Login, Register, Forgot Password
│   ├── Dashboard/         # Main dashboard / home
│   ├── Chat/              # Private and group chat views
│   ├── Contacts/          # Friend list, requests, blocked users
│   ├── Calls/             # Call history and active call UI
│   ├── Meetings/          # Meeting room and scheduling
│   ├── Settings/          # User preferences and configuration
│   ├── Notifications/     # Notification center
│   └── Profile/           # User profile view and edit
│
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── context/               # React Context providers
├── services/              # API service functions (Axios)
├── socket/                # Socket.IO client setup and handlers
├── utils/                 # Utility/helper functions
├── assets/                # Static assets (images, icons)
├── styles/                # Global and shared styles
├── App.jsx                # Root component with routing
└── main.jsx               # Application entry point
```

### Frontend Routing

| Route              | Page              | Description                        |
| ------------------ | ----------------- | ---------------------------------- |
| `/login`           | Authentication    | User login                         |
| `/register`        | Authentication    | User registration                  |
| `/forgot-password` | Authentication    | Password recovery                  |
| `/`                | Dashboard         | Main application dashboard         |
| `/chat/:id`        | Chat              | Private or group chat view         |
| `/contacts`        | Contacts          | Contacts and friend management     |
| `/calls`           | Calls             | Call history                       |
| `/meetings`        | Meetings          | Meeting list and scheduling        |
| `/meeting/:id`     | Meeting Room      | Active meeting room                |
| `/settings`        | Settings          | User settings and preferences      |
| `/notifications`   | Notifications     | Notification center                |
| `/profile`         | Profile           | View and edit user profile         |

---

## Real-Time Communication Architecture

### Socket.IO Events

```
┌─────────────┐                        ┌─────────────┐
│   Client A   │◄──────────────────────►│   Server     │
│              │   Socket.IO Events     │              │
│  • send_msg  │ ──────────────────────►│  • new_msg   │
│  • typing    │ ──────────────────────►│  • typing    │
│  • join_room │ ──────────────────────►│  • joined    │
│  • call_user │ ──────────────────────►│  • incoming  │
│              │                        │              │
│              │◄───────────────────────│  • receive   │
│              │◄───────────────────────│  • notif     │
└─────────────┘                        └──────┬──────┘
                                              │
                                              ▼
                                       ┌─────────────┐
                                       │   Client B   │
                                       │  (Broadcast) │
                                       └─────────────┘
```

### WebRTC Call Flow

```
Caller                    Server                    Receiver
  │                         │                         │
  │── call_user ──────────►│── incoming_call ───────►│
  │                         │                         │
  │                         │◄── call_accepted ──────│
  │◄── call_accepted ──────│                         │
  │                         │                         │
  │── WebRTC Offer ────────────────────────────────►│
  │◄── WebRTC Answer ─────────────────────────────── │
  │── ICE Candidates ─────────────────────────────►│
  │◄── ICE Candidates ────────────────────────────── │
  │                         │                         │
  │◄════════ Peer-to-Peer Media Stream ════════════►│
```

---

## Deployment Architecture

```
┌──────────────────────────────────────────────────┐
│                  Linux Server                     │
│                                                   │
│  ┌─────────┐     ┌──────────────────────────┐    │
│  │  Nginx   │────►│  Node.js App (PM2)        │    │
│  │ (Proxy)  │     │  ├── Express API          │    │
│  │          │     │  └── Socket.IO Server     │    │
│  └─────────┘     └────────────┬─────────────┘    │
│       │                       │                   │
│       │               ┌───────┴───────┐          │
│       │               │   MongoDB     │          │
│       │               └───────────────┘          │
│       │                                           │
│  Static Files (React Build)                       │
└──────────────────────────────────────────────────┘
```

| Component   | Role                                                     |
| ----------- | -------------------------------------------------------- |
| **Nginx**   | Reverse proxy, SSL termination, serve static frontend    |
| **PM2**     | Process manager — auto-restart, clustering, monitoring   |
| **Docker**  | Containerization for reproducible environments           |
| **MongoDB** | Database server (can be self-hosted or Atlas)            |

---

<p align="center">
  <em>See the <a href="../README.md">README</a> for project overview and roadmap.</em>
</p>

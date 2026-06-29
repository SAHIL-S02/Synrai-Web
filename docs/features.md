# ✨ Synrai — Features

> Complete feature breakdown for the Synrai communication platform.

---

## 🔐 Authentication

| Feature                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| Register               | Create a new Synrai account                         |
| Login                  | Authenticate with email and password                |
| Logout                 | Securely end the session                            |
| Refresh Token          | Seamless session renewal without re-login           |
| Email Verification     | Verify user email via confirmation link             |
| Forgot Password        | Request a password reset link                       |
| Reset Password         | Set a new password via secure token                 |
| JWT Authentication     | Stateless token-based authentication                |
| Refresh Token Rotation | Rotate refresh tokens on every use for security     |
| Two-Factor Auth        | *(Future)* Additional authentication layer via OTP  |

---

## 👤 User Profile

| Field            | Description                                      |
| ---------------- | ------------------------------------------------ |
| Profile Picture  | Upload and display a user avatar                 |
| Username         | Unique identifier for the user                   |
| Display Name     | User's visible display name                      |
| Bio              | Short personal description                       |
| Email            | User's registered email address                  |
| Phone Number     | Optional phone contact                           |
| Status           | Custom text status message                       |
| Last Seen        | Timestamp of last activity                       |
| Online Status    | Real-time online/offline indicator               |
| Privacy Settings | Control who can see profile details              |

---

## 💬 Messaging

### Private Chat

| Feature             | Description                                       |
| ------------------- | ------------------------------------------------- |
| Real-time Messaging | Instant message delivery via WebSocket            |
| Read Receipts       | Know when your message has been read              |
| Delivered Status    | Confirmation that a message was delivered          |
| Typing Indicator    | See when the other person is typing               |
| Online Status       | Real-time presence indicator                      |
| Emoji Reactions     | React to messages with emojis                     |
| Reply               | Reply to a specific message in context            |
| Edit Message        | Modify a sent message                             |
| Delete Message      | Remove a message from the conversation            |
| Pin Message         | Pin important messages for quick access           |
| Search Messages     | Search through message history                    |

### Group Chat

| Feature              | Description                                      |
| -------------------- | ------------------------------------------------ |
| Create Group         | Start a new group conversation                   |
| Invite Members       | Add users to the group                           |
| Admin Roles          | Assign admin privileges to members               |
| Permissions          | Control what members can do within the group      |
| Group Avatar         | Set a group profile picture                      |
| Group Description    | Add a description for the group                  |
| Mention Users        | Tag specific users with `@` mentions             |
| Group Announcements  | Post announcements visible to all members        |

---

## 📞 Voice Calling

| Feature              | Description                                      |
| -------------------- | ------------------------------------------------ |
| One-to-One Calls     | Direct voice calls between two users             |
| Group Voice Calls    | Multi-participant voice calls                    |
| Call Timer           | Display call duration in real time               |
| Mute                 | Mute/unmute the microphone                       |
| Speaker Mode         | Toggle speaker/earpiece output                   |
| Noise Suppression    | Reduce background noise during calls             |

---

## 🎥 Video Calling

| Feature              | Description                                      |
| -------------------- | ------------------------------------------------ |
| HD Video             | High-definition video streaming                  |
| Camera Toggle        | Turn camera on/off during a call                 |
| Microphone Toggle    | Mute/unmute the microphone                       |
| Screen Sharing       | Share your screen with participants              |
| Background Blur      | *(Future)* Blur the video background             |
| Virtual Background   | *(Future)* Replace background with an image      |

---

## 🏛️ Meetings

| Feature                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| Instant Meetings       | Start a meeting immediately                     |
| Scheduled Meetings     | Schedule a meeting for a future date/time       |
| Meeting Links          | Share a unique link to join the meeting          |
| Meeting Password       | Protect meetings with a password                |
| Waiting Room           | Hold participants until the host admits them     |
| Host Controls          | Manage participants, mute, remove, etc.         |
| Raise Hand             | Participants can raise hand to speak            |
| Recording              | Record meetings for later playback              |
| Chat During Meeting    | In-meeting chat for text communication          |
| Screen Sharing         | Share screen during a meeting                   |
| Participant Management | View and manage meeting participants            |

---

## 📎 File Sharing

| File Type    | Supported Formats                      |
| ------------ | -------------------------------------- |
| Images       | PNG, JPG, GIF, WebP, SVG              |
| Videos       | MP4, WebM, MOV                         |
| PDFs         | PDF documents                          |
| Documents    | DOCX, XLSX, PPTX, TXT                 |
| ZIP Files    | Compressed archives                    |
| Audio Files  | MP3, WAV, OGG, FLAC                   |

---

## 🔔 Notifications

| Notification Type    | Description                                |
| -------------------- | ------------------------------------------ |
| Push Notifications   | Browser/device push alerts                 |
| Message Notifications| New message alerts                         |
| Missed Calls         | Notification for unanswered calls          |
| Mentions             | Alert when mentioned in a group            |
| Meeting Invitations  | Notification for upcoming meetings         |

---

## 👥 Contacts

| Feature          | Description                                    |
| ---------------- | ---------------------------------------------- |
| Add Friends      | Send friend requests to other users            |
| Block Users      | Block unwanted contacts                        |
| Friend Requests  | Accept or reject incoming requests             |
| Favorite Contacts| Mark frequently contacted users as favorites   |

---

## 🟢 Presence System

| Status     | Description                                        |
| ---------- | -------------------------------------------------- |
| Online     | User is active and available                       |
| Offline    | User is not connected                              |
| Busy       | User is occupied and prefers not to be disturbed   |
| Away       | User is temporarily away                           |
| Invisible  | User appears offline but can use the platform      |

---

## 🔍 Search

Search across the platform by:

- **Username** — Find users by their handle
- **Email** — Look up users by email address
- **Groups** — Search for groups by name
- **Messages** — Full-text search through message history
- **Files** — Find shared files by name or type

---

## 🤖 Future AI Features

| Feature               | Description                                        |
| --------------------- | -------------------------------------------------- |
| AI Chat Assistant     | In-chat AI helper for questions and tasks          |
| Meeting Summary       | Auto-generated summary after meetings              |
| Voice Transcription   | Real-time speech-to-text during calls/meetings     |
| Message Translation   | Instantly translate messages to other languages    |
| Smart Replies         | Context-aware suggested replies                    |
| AI Search             | Intelligent, semantic search across all content    |

---

<p align="center">
  <em>See the <a href="../README.md">README</a> for roadmap and project overview.</em>
</p>

# 🏫 ViziPass — Campus Visitor & Gatepass Management System

> 🖥️ A full-stack desktop + web application that digitizes campus visitor entry — featuring an animated loading screen, user authentication, guest detail forms, **real-time email approval**, and **auto-downloadable QR code gatepass** generation.

---

## ✨ Features

- 🎬 **Animated Loading Screen** — Bubble animations, boom gate, and loading bar on startup
- 🔐 **User Authentication** — Sign up and login with strong password validation
- 👁️ **Show/Hide Password** — Toggle password visibility
- 🧑‍👦 **Guest & Parent Details Form** — Collects visitor info with real-time validation
- 🚗 **Vehicle Support** — Optional vehicle number entry with format validation
- 📧 **Email Approval System** — Sends approval request email 
- ✅ **Approve / Reject via Email** — Student clicks directly from inbox
- ⏳ **Auto Polling** — Frontend checks approval status every 5 seconds
- 📲 **QR Code Gatepass** — Auto-generates and downloads QR code on approval
- 💾 **Remember Me** — Saves credentials using localStorage
- 🔒 **Security Dashboard** — View all visitors and currently present visitors
- 🖥️ **Desktop App** — Runs as a standalone Electron application

---

## 🗂️ Project Structure

| File | Description |
|------|-------------|
| `main.js` | Electron entry point — creates the BrowserWindow |
| `preload.js` | Exposes safe Electron APIs to renderer |
| `staring_animation.html` | Startup loading screen with animations |
| `FP2.html` | Landing / home page |
| `secondpage.html` | Login or Sign Up selection page |
| `login.html` | Login form with validation |
| `signup.html` | Sign up form with password confirmation |
| `parent_details.html` | Parent/guest details form + QR generation (offline) |
| `guest_details.html` | Guest form with email approval + QR generation |
| `securityChoice.html` | Security dashboard — All visitors / Currently inside |
| `logo.html` | Animated SVG logo source |
| `server.js` | Express backend — email sending, approve, reject, polling |
| `style1.css` | Main shared stylesheet (glassmorphism UI) |
| `button.css` | Navigation arrow button styles |
| `package.json` | App config and dependencies |


---


---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm
- A Gmail account with **App Password** enabled

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vizipass.git
cd vizipass
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=3000
```

> ⚠️ Use a **Gmail App Password**, not your regular Gmail password.
> Get it from: Google Account → Security → 2-Step Verification → App Passwords

### 4. Start the Backend Server

```bash
node server.js
```

### 5. Run the Electron App

```bash
npm start
```

### 6. Build for Windows (.exe)

```bash
npm run build
```

> Built app will be in the `dist/` folder.

---

## 📧 Email Approval System

### How It Works

When a guest submits their details, an email is automatically sent to the student linked to that Student ID. The email contains two buttons — **Approve** and **Reject** — which the student clicks directly from their inbox.

### `POST /send-email`

Sends an approval request to the student's registered email.

| Field | Type | Description |
|-------|------|-------------|
| `guestName` | String | Name of the guest |
| `phoneNumber` | String | Guest's 10-digit phone number |
| `studentID` | String | Student ID (format: `CB.XX.X0XXX00000`) |
| `carNumber` | String | Vehicle number (optional) |

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

---

### `GET /approve`

Approves the guest entry for the given Student ID.

| Param | Description |
|-------|-------------|
| `studentID` | Student ID to approve |

**Response:** HTML confirmation page ✅

---

### `GET /reject`

Rejects the guest entry for the given Student ID.

| Param | Description |
|-------|-------------|
| `studentID` | Student ID to reject |

**Response:** HTML rejection page ❌

---

### `GET /check-approval`

Polls the current approval status.

| Param | Description |
|-------|-------------|
| `studentID` | Student ID to check |

**Response:**
```json
{
  "success": true,
  "status": "approved"
}
```

> Status values: `pending` / `approved` / `rejected`

---



## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `electron` | Desktop app framework |
| `electron-builder` | Build & package into `.exe` |
| `express` | Backend web server |
| `nodemailer` | Send approval emails via Gmail |
| `cors` | Allow cross-origin requests |
| `dotenv` | Load environment variables |
| `qrcodejs` | QR Code generation (CDN) |
| `boxicons` | Form field icons (CDN) |
| `font-awesome` | UI icons (CDN) |
| `Google Fonts` | Poppins typography (CDN) |

---


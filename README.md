# 🏫 ViziPass — Campus Visitor & Gatepass Management System

> 🖥️ A desktop application built with **Electron.js** that digitizes campus visitor entry — featuring animated loading screen, user authentication, parent/guest detail forms, QR code gatepass generation, and a security dashboard for monitoring visitors.

---

## ✨ Features

- 🎬 **Animated Loading Screen** — Bubble animations, boom gate animation, and loading bar on startup
- 🔐 **User Authentication** — Sign up and login with email/password validation
- 👁️ **Show/Hide Password** — Toggle password visibility on login and signup
- 🧑‍👦 **Parent & Guest Details Form** — Collects guest info with real-time validation
- 🚗 **Vehicle Support** — Optional vehicle number entry with format validation
- 📲 **QR Code Generation** — Auto-generates and downloads a QR gatepass on form submit
- 💾 **Remember Me** — Saves credentials using localStorage
- 🔒 **Security Dashboard** — View all visitors and currently present visitors
- 🖥️ **Desktop App** — Runs as a standalone app via Electron

---

## 🗂️ Project Structure

| File | Description |
|------|-------------|
| `main.js` | Electron entry point — creates the BrowserWindow |
| `preload.js` | Exposes safe Electron APIs to renderer |
| `staring_animation.html` | Startup loading screen with animations |
| `FP2.html` | Landing/home page |
| `secondpage.html` | Login or Sign Up selection page |
| `login.html` | Login form with validation |
| `signup.html` | Sign up form with password confirmation |
| `parent_details.html` | Parent/guest details form + QR generation |
| `securityChoice.html` | Security dashboard — All visitors / Currently inside |
| `logo.html` | SVG logo source file |
| `style1.css` | Main shared stylesheet (glassmorphism UI) |
| `button.css` | Navigation arrow button styles |
| `package.json` | Electron app config and dependencies |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vizipass.git
cd vizipass
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

### 4. Build for Windows (.exe)

```bash
npm run build
```

> The built app will be in the `dist/` folder.

---

## 🖥️ Pages Overview

### `staring_animation.html` — Loading Screen
- Animated boom gate opening and closing
- Floating bubble animations
- Progress loading bar
- Auto-redirects to home page after loading

### `secondpage.html` — Auth Selection
- Card-based UI to choose Login or Sign Up

### `login.html` — Login
- Email and password validation
- Show/hide password toggle
- Remember Me with localStorage
- Redirects to Parent Details on success

### `signup.html` — Sign Up
- Email, password, confirm password
- Strong password rules enforced
- Stores credentials in localStorage

### `parent_details.html` — Guest Form
- Guest name, phone, student ID, vehicle info
- Real-time field validation
- Generates and auto-downloads QR Code gatepass

### `securityChoice.html` — Security Dashboard
- View all visitors
- View visitors currently inside campus

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `electron` | Desktop app wrapper |
| `electron-builder` | Build & package the app |
| `qrcodejs` | QR Code generation (CDN) |
| `boxicons` | Form icons (CDN) |
| `font-awesome` | UI icons (CDN) |
| `Google Fonts (Poppins)` | Typography (CDN) |




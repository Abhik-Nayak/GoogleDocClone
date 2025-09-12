# Google Docs Clone

A collaborative document editing web application inspired by Google Docs.

---

## 🚀 Features

* ✍️ **Rich Text Editing** – Bold, Italic, Underline, Headings, Lists, etc.
* 👥 **Real-time Collaboration** – Multiple users can edit the same document simultaneously.
* 💾 **Auto-Save** – Changes are saved automatically in the database.
* 🔗 **Shareable Links** – Access documents via unique shareable IDs.
<!-- * 🔒 **Authentication** – User signup/login (if implemented). -->
<!-- * 📑 **Document Management** – Create, update, and delete documents. -->

---

## 🛠️ Tech Stack

**Frontend**

* React / Next.js
* CSS
* Rich Text Editor (Quill.js / Draft.js / TipTap)

**Backend**

* Node.js 
* WebSockets / Socket.IO (for real-time updates)

**Database**

* MongoDB

---

## 📂 Project Structure

```
GoogleDocClone/
│── client/          # Frontend code (React/Next.js)
│── server/          # Backend code (Socket.IO)
│── models/          # Database models
│── routes/          # API routes
│── package.json     # Dependencies
```

---

## ⚙️ Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/Abhik-Nayak/GoogleDocClone.git
   cd google-docs-clone
   ```

2. Install dependencies

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Configure environment variables

   * Create a `.env` file in `/server` with:

     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret
     ```

4. Start the backend server

   ```bash
   cd server
   npm run dev
   ```

5. Start the frontend

   ```bash
   cd client
   npm start
   ```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss.

---

## 📜 License

This project is licensed under the MIT License.

---

Do you want me to **extract actual tech stack and features directly from your source code** (like which DB, frontend framework, or editor you used) so the README matches your exact implementation?

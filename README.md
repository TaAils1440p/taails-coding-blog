# TaAils Coding Blog

A **static, vanilla HTML/CSS/JS blog** dedicated to coding tutorials.
All content is open-source and designed to be easily modifiable by editing the code directly in the GitHub repository.

🔗 **[Live Demo](https://taails1440p.github.io/taails-coding-blog/)**

---

## 📌 Features

- **Static & Fast**: No backend, no database - just pure HTML, CSS, and JavaScript.
- **Easy to Update**: Add or modify tutorials by editing files in the `articles/` folder.
- **Open-Source**: Licensed under **MIT** and **Apache 2.0**.
- **GitHub Pages Ready**: Deploy instantly by pushing to GitHub.

---

## 📂 Project Structure

```bash
.
├── articles/
│   └── [TUTORIALS]         # Tutorials files
├── assets/
│   ├── css/
│   │   ├── about.css       # About page styles
│   │   └── style.css       #  Global styles
│   └── js/
│       └── main.js         # Loads header/footer dynamically
├── misc
│   └── about.html          # About page
├── public/
│   └── favicon.ico         # Favicon
├── templates
│   ├── footer.html         # Site footer (links, license)
│   ├── header.html         # Site header (navigation)
│   └── template.html       # Tutorial template
├── index.html              # Homepage (lists all tutorials)
├── LICENSE-Apache          # Apache2.0 License
├── LICENSE-MIT             # MIT License
└── README.md               # This file
```

---

## 🛠️ Setup & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/TaAils1440p/taails-coding-blog.git
cd taails-coding-blog
```

### 2. Add or Modify Tutorials
- Create a new .html file in the `articles/` folder.
- Use the `templates/template.html` as a starting point.
- Update the tutorials list in `./assets/js/main.js` to include your new tutorial.

### 3. Test locally
Use a local server (e.g., [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) to preview changes.

### 4. Deploy to GitHub Pages
1. Push your changes to the main branch.
2. Enable GitHub Pages in your repository settings (use the main branch).
3. Your blog will be live at https://ur-username.github.io/ur-repo-name/.

## 📝 License
This project is open-source and licensed under:
- [MIT License](./LICENSE-MIT)
- [Apache License 2.0](./LICENSE-Apache)

You are free to:
- Use, modify, and distribute the code.
- Contribute by opening pull requests.

## 📫 Contact
- Discord: [Join my server](https://discord.gg/KYYKcbgcwy)
- GitHub: [TaAils1440p](https://github.com/TaAils1440p)

---

© 2025 TaAils Coding Blog
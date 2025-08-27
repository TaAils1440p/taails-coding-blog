// Charge le header et le footer
fetch('/templates/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Erreur header:', error));

fetch('/templates/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Erreur footer:', error));

// Liste les tutoriels disponibles
const tutoriels = [
    { titre: "Install Oh My Zsh", fichier: "articles/oh-my-zsh.html" },
    // Copy link and change path/title
];

// Affiche la liste des tutoriels
const listeTutoriels = document.getElementById('tutoriels-liste');
tutoriels.forEach(tuto => {
    listeTutoriels.innerHTML += `
        <div class="tutoriel">
            <a href="${tuto.fichier}"><h2>${tuto.titre}</h2></a>
        </div>
    `;
});
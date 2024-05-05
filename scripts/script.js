const idBtn = document.getElementById('id-btn');
const enableTextExperience = document.getElementById('experience-text');
const disableTextAboutMe = document.getElementById('about-me-text');
const titleCard = document.getElementById('title-card');
const emailBtn = document.getElementById('email-btn');

emailBtn.addEventListener('click', () => {
    window.location.href = 'mailto:lucasrodriguesdonascimento@outlook.com?subject=Olá%20do%20meu%20portfólio';
});
let isClicked = false;
idBtn.addEventListener('click', (event) => {
    if (!isClicked) {
        disableTextAboutMe.style.display = "none";
        enableTextExperience.style.display = "block";
        isClicked = true;
        idBtn.textContent = "Sobre";
        titleCard.textContent = 'Experiências'
        titleCard.style.textAlign = "center"
        return;
    }
    disableTextAboutMe.style.display = "block";
    enableTextExperience.style.display = "none";
    idBtn.textContent = "Experiências";
    titleCard.textContent = 'Sobre mim'
    titleCard.style.textAlign = "unset"
    isClicked = false;
});
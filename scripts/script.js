const hasClickedBtnInitial = document.getElementById('id-btn');
const enableTextExperience = document.getElementById('experience-text');
const disableTextAboutMe = document.getElementById('about-me-text');
const titleCard = document.getElementById('title-card');
const emailBtn = document.getElementById('email-btn');
const introBackGround = document.getElementById('intro');
const hasClickedBtnProfile = document.getElementById('id-btn-profile');
const mediaQuery = window.matchMedia('(max-width: 600px)');
let isClicked = false;
emailBtn.addEventListener('click', () => {
    window.location.href = 'mailto:lucasrodriguesdonascimento@outlook.com?subject=Olá%20do%20meu%20portfólio';
});
hasClickedBtnProfile.addEventListener('click', (event) => {
    disableTextAboutMe.style.display = "block";
    enableTextExperience.style.display = "none";
    titleCard.textContent = 'Sobre'
    titleCard.style.textAlign = "unset"
    introBackGround.style.backgroundColor = "#ededed"
    hasClickedBtnProfile.style.display = 'none';
    hasClickedBtnInitial.style.display = "initial";
    isClicked = false;
});
hasClickedBtnInitial.addEventListener('click', (event) => {
    if (!isClicked) {
        disableTextAboutMe.style.display = "none";
        enableTextExperience.style.display = "grid";
        titleCard.textContent = "Experiências"
        titleCard.style.textAlign = "center"
        introBackGround.style.backgroundColor = "#ffff";
        isClicked = true;
        if (!mediaQuery.matches) {
            hasClickedBtnInitial.style.display = "none";
            hasClickedBtnProfile.style.display = 'block';
            hasClickedBtnInitial.textContent = "Experiências";
            return;
        }
        hasClickedBtnInitial.textContent = "Sobre";
        return;
    }
    disableTextAboutMe.style.display = "block";
    enableTextExperience.style.display = "none";
    titleCard.textContent = 'Experiências'
    titleCard.style.textAlign = "unset"
    introBackGround.style.backgroundColor = "#ededed"
    hasClickedBtnInitial.textContent = "Experiências";
    isClicked = false;
});
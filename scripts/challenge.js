const currentPage = window.location.pathname;

function getCurrentPage() {
    if (!currentPage) return;

    return currentPage.split('/').pop().slice(0, -5);
}

function changeBackground() {
    const classChallenge = getCurrentPage();
    const currentAnchor = document.querySelector(`.${classChallenge}`);

    if (!currentAnchor) return;
    currentAnchor.style.backgroundImage = 'url("../assets/images/light-window.webp")';
}

changeBackground();

const currentChallenge = Number(sessionStorage.currentChallenge) || 1;
let newChallenge = Number(sessionStorage.newChallenge);

document.documentElement.style.setProperty(
            "--current-challenge",
            currentChallenge
        );

        document.documentElement.style.setProperty(
            "--new-challenge",
            newChallenge
        );

const aside = document.querySelector('aside');

aside.querySelectorAll('[class^="challenge-"]').forEach(el => {
    el.addEventListener('click', () => {
        sessionStorage.currentChallenge = newChallenge;
        sessionStorage.newChallenge = el.textContent;
    });
});

window.addEventListener('load', () => {
    sessionStorage.currentChallenge = sessionStorage.newChallenge;
});
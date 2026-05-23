

document.querySelectorAll('.bubbles-2 a').forEach(el => {
    el.addEventListener('click', () => {
        sessionStorage.currentChallenge = -1;
        sessionStorage.newChallenge = el.textContent;
    });
});
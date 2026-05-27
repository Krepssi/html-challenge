document.querySelectorAll('.bubbles-2 a').forEach(el => {
    el.addEventListener('click', () => {
        const n = el.textContent;

        sessionStorage.currentChallenge = -1;
        sessionStorage.newChallenge = (n%10 !== 0)? String(n%10) : "10";
        
    });
});

import styles from "./ChallengeMenu.css" with { type: "css" };

const currentPage = window.location.pathname;
const numberPage = currentPage.match(/\d+/)[0];

class ChallengeMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.#setCustomProperties();
    }

    connectedCallback() {
        const { start, end } = this.#getChallengeRange();
        const links = [];
        for (let i = start; i <= end; i++) {
            links.push(`<li><a class="challenge-${i}" href="./challenge-${i}.html">${i}</a></li>`);
        }

        this.shadowRoot.setHTMLUnsafe( /* html */`
        <aside>
            <ul>
                 ${links.join('\n')}
                 ${this.#generateNav()}
            </ul>
        </aside>
            `
        )

        this.#changeBackground();
        this.#addClickListeners();

    }

    #setCustomProperties() {
        const currentChallenge = Number(sessionStorage.currentChallenge) || 1;
        const newChallenge = Number(sessionStorage.newChallenge);
        this.style.setProperty("--current-challenge", currentChallenge);
        this.style.setProperty("--new-challenge", newChallenge);
    }

    #getCurrentPage() {
        if (!currentPage) return;

        return currentPage.split('/').pop().slice(0, -5);
    }

    #changeBackground() {
        const classChallenge = this.#getCurrentPage();
        const currentAnchor = this.shadowRoot.querySelector(`li:has(.${classChallenge})`);

        if (!currentAnchor) return;
        currentAnchor.style.backgroundImage = 'url("../assets/images/light-window.webp")';
    }

    #addClickListeners() {
        const aside = this.shadowRoot.querySelector('aside');
        aside.querySelectorAll('[class^="challenge-"]').forEach(el => {
            el.addEventListener('click', () => {
                const n = el.textContent;

                sessionStorage.currentChallenge = Number(sessionStorage.newChallenge);
                sessionStorage.newChallenge = (n % 10 !== 0) ? String(n % 10) : "10";
            });
        });

        aside.querySelectorAll('.prev, .next').forEach(el => {
            el.addEventListener('click', () => {
                sessionStorage.newChallenge = "1";
            });
        });
    }

    #getChallengeRange() {
        if (numberPage <= 10) return { start: 1, end: 10 }
        if (numberPage <= 20) return { start: 11, end: 20 }
        if (numberPage <= 30) return { start: 21, end: 30 }
    }


    #generateNav() {
        let prevHref = "";
        let nextHref = "";
        let prevDisabled = false;
        let nextDisabled = false;
        const style = 'style="pointer-events:none;opacity:0.3"';


        if (numberPage <= 10) {
            prevDisabled = true;
            nextHref = "./challenge-11.html";
        } else if (numberPage <= 20) {
            prevHref = "./challenge-1.html";
            nextHref = "./challenge-21.html";
        } else {
            prevHref = "./challenge-11.html";
            nextDisabled = true;
        }
        return `
        <li>
            <a class="prev" href="${prevHref}" ${prevDisabled ? style : ''}>
                <img src="../assets/images/arrow.webp" alt="">
            </a>
            <a class="home" href="../index.html">
                <img src="../assets/images/home.png" alt="">
            </a>
            <a class="next" href="${nextHref}" ${nextDisabled ? 'style="pointer-events:none;opacity:0.3"' : ''}>
                <img src="../assets/images/arrow.webp" alt="">
            </a>   
        </li>
    `;
    }
}

customElements.define("challenge-menu", ChallengeMenu);

window.addEventListener('load', () => {
    sessionStorage.currentChallenge = sessionStorage.newChallenge;
}); 
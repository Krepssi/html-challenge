import { dataPages } from "../data/data-pages.js";
import styles from "./ChallengeInfo.css" with { type: "css" };

const currentPage = window.location.pathname;
const numberPage = currentPage.match(/\d+/);

class ChallengeInfo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }

    connectedCallback() {
        if (!numberPage) return;

        const n = numberPage[0];
        const challenge = dataPages[n];
        const description = challenge?.description ?? "Descripción pendiente";
        const advice = challenge?.advice ?? "El error no es el enemigo, es la pista.";

        this.shadowRoot.setHTMLUnsafe(/* html */`
            <main>
                <header class="info">
                    <div class="info-retos">
                        <h3>Superando los retos <span>❤</span></h3>
                        <p>Reto ${n} de 30</p>
                    </div>
                    <div class="header">
                        <h1>Reto ${n}</h1>
                        <p>${description}</p>
                    </div>
                    <div class="advice">
                        <h4>Consejo del día</h4>
                        <p>${advice}</p>
                    </div>
                </header>
                <section class="reto">
                    <slot></slot>
                </section>
            </main>
        `);
    }
}

customElements.define("challenge-info", ChallengeInfo);

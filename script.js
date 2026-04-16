// 1. GESTÃO DE DADOS (Conteúdo Dinâmico)
const pilaresAgrinho = [
    { title: "Educação", desc: "Levar conhecimento técnico às escolas rurais." },
    { title: "Sustentabilidade", desc: "Práticas que preservam o solo e a água." },
    { title: "Tecnologia", desc: "Drones e IA aplicados ao campo moderno." }
];

const faqs = [
    { q: "O que é o Agrinho?", a: "É o maior programa de responsabilidade social do Sistema FAEP." },
    { q: "Qual o objetivo em 2026?", a: "Fomentar a conexão digital e sustentável entre campo e cidade." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function renderContent() {
    const cardsContainer = document.getElementById('cards-container');
    const accordionContainer = document.getElementById('accordion-container');

    // Renderizando Cards
    cardsContainer.innerHTML = pilaresAgrinho.map(item => `
        <article class="card">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </article>
    `).join('');

    // Renderizando Acordeões
    accordionContainer.innerHTML = faqs.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(${index})">
                ${item.q}
            </button>
            <div class="accordion-content" id="faq-${index}">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

// 3. ACESSIBILIDADE: CONTROLE DE FONTE E CONTRASTE
let currentSize = 16;
function changeFontSize(type) {
    currentSize = type === 'increase' ? currentSize + 2 : currentSize - 2;
    document.documentElement.style.setProperty('--font-base', `${currentSize}px`);
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// 4. LÓGICA DO ACORDEÃO
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    contents[index].classList.toggle('active');
}

// 5. SCROLL REVEAL (Visão Sistêmica)
function checkReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Inicialização
window.addEventListener('scroll', checkReveal);
window.onload = () => {
    renderContent();
    checkReveal();
};

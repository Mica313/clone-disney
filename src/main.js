document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const hero = document.querySelector('.hero');


    const alturaHero = hero.clientHeight;
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;
        if(posicaoAtual < alturaHero){
            ocultaElementos();
        }else{
            exibeElementos();
        }
    })

    //tabs
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const tabAlvo = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabAlvo}]`);
            escondeabas();
            tab.classList.add('shows__list--is-active');
            escondebtn();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    //accordion
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abrefecha);
    }
})

function ocultaElementos(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function exibeElementos(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abrefecha(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementopai = elemento.target.parentNode;
    elementopai.classList.toggle(classe);
}

function escondebtn(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');

    }
}

function escondeabas(){
    const tabcontainer = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i < tabcontainer.length; i++){
        tabcontainer[i].classList.remove('shows__list--is-active');
    }
}
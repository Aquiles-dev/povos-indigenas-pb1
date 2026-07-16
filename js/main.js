/* ===================================
   MENU MOBILE
=================================== */


const header = document.querySelector("header");

const nav = document.querySelector("nav");


const menuButton = document.createElement("button");


menuButton.classList.add("menu-mobile");

menuButton.innerHTML = "☰";


header.insertBefore(menuButton, nav);



menuButton.addEventListener("click", () => {

    nav.classList.toggle("ativo");

});



/* Fechar menu ao clicar em um link */

const linksMenu = document.querySelectorAll("nav a");


linksMenu.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("ativo");

    });

});





/* ===================================
   ANIMAÇÃO AO APARECER NA TELA
=================================== */


const elementos = document.querySelectorAll(
    ".card, .introducao, .aviso, .sobre-projeto, .povo-header, .povo-hero, .conteudo section"
);



const observador = new IntersectionObserver(
    
    (entradas) => {


        entradas.forEach(entrada => {


            if(entrada.isIntersecting){


                entrada.target.classList.add("mostrar");


                observador.unobserve(entrada.target);


            }


        });


    },

    {

        threshold:0.15

    }

);




elementos.forEach(elemento => {


    elemento.classList.add("animar");


    observador.observe(elemento);


});






/* ===================================
   BOTÃO VOLTAR AO TOPO
=================================== */


const botaoTopo = document.createElement("button");


botaoTopo.innerHTML = "↑";


botaoTopo.classList.add("topo");



document.body.appendChild(botaoTopo);





window.addEventListener("scroll", () => {


    if(window.scrollY > 500){


        botaoTopo.classList.add("visivel");


    }

    else{


        botaoTopo.classList.remove("visivel");


    }


});





botaoTopo.addEventListener("click", () => {


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});





/* ===================================
   ANO AUTOMÁTICO
=================================== */


const anoAtual = new Date().getFullYear();


const elementosAno = document.querySelectorAll(".ano");


elementosAno.forEach(elemento => {


    elemento.textContent = anoAtual;


});
const input = document.getElementById("meuInput");
const clearBtn = document.querySelector(".clear");

input.addEventListener("input", function() {
  clearBtn.style.display = this.value ? "block" : "none";
});

function limpar() {
  input.value = "";
  clearBtn.style.display = "none";
}





function abrirModal(){
    const botaoProduto = document.getElementById("buttonProdutos");
    const botaoServico = document.getElementById("buttonServicos");
    const janelaservico = document.getElementById("listaservicos");
    const outrajanela = document.getElementById("outrajanela");
    const janelaprodutos = document.getElementById("listaprodutos");
    janelaservico.classList.remove('mostrar');
    janelaprodutos.classList.remove('mostrar');
    janelaprodutos.classList.add('mostrar');

    outrajanela.classList.remove('mostrar');

    janelaservico.classList.add('semmostrar');
    botaoServico.classList.remove('ativo');
    botaoProduto.classList.add('ativo');
    const modal =document.getElementById('modal-container');
    modal.classList.add('mostrar');

    modal.addEventListener('click',(e)=>{
        if(e.target.id =='modal-container' || e.target.id == "fechar"){
        modal.classList.remove('mostrar');
        
        }
    });
    
}

function mostrarMenu(){
    const outrajanela = document.getElementById("outrajanela");
    outrajanela.classList.add('mostrar');
    const modal =document.getElementById('modal-container');
    modal.addEventListener('click',(e)=>{
        if(e.target.id =='modal-container' || e.target.id == "fechar"){
        outrajanela.classList.remove('mostrar');
        }
    });
}


function mostrarServicos(){
    const botaoProduto = document.getElementById("buttonProdutos");
    const botaoServico = document.getElementById("buttonServicos");
    botaoServico.classList.add('ativo');
    botaoProduto.classList.remove('ativo');
    const janelaservico = document.getElementById("listaservicos");
    const janelaprodutos = document.getElementById("listaprodutos");
    const outrajanela = document.getElementById("outrajanela");
    janelaservico.classList.remove('mostrar');
    janelaprodutos.classList.remove('mostrar');
    janelaservico.classList.add('mostrar');
    janelaprodutos.classList.add('semmostrar');
    outrajanela.classList.remove('mostrar');
}


function mostrarProdutos(){
    const botaoProduto = document.getElementById("buttonProdutos");
    const botaoServico = document.getElementById("buttonServicos");
    botaoServico.classList.remove('ativo');
    botaoProduto.classList.add('ativo');
    const janelaservico = document.getElementById("listaservicos");
    const outrajanela = document.getElementById("outrajanela");
    const janelaprodutos = document.getElementById("listaprodutos");
    janelaservico.classList.remove('mostrar');
    janelaprodutos.classList.remove('mostrar');
    janelaprodutos.classList.add('mostrar');

    outrajanela.classList.remove('mostrar');

    janelaservico.classList.add('semmostrar');
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});

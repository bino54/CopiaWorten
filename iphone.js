
const imagens = [...document.querySelectorAll('.galeria img')]; // Pegando todas as imagens do container
const imagemtroca = document.querySelector('.imagemacima img' )
const nextBtn = document.querySelector('.direita1');
const prevBtn = document.querySelector('.esquerda1');

imagens.forEach(imagem => {
    imagem.addEventListener('click',() =>{
        const imgSelecionada = imagem.src;
        imagemtroca.src = imgSelecionada;
    })
})





let index = 0;

function updateCarousel2() {
  const imagem = imagens.find(
    img => Number(img.dataset.valor) == index
  );

  if (imagem) {
    imgSelecionada = imagem.src;
    imagemtroca.src = imgSelecionada;
  }
  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.style.display = index === 4 ? "none" : "block";
}




updateCarousel2();




function mudarxImagem2(){
  index = index + 1;
  updateCarousel2();
}

function mudarxImagem1(){
  index = index - 1;
  updateCarousel2();
}





















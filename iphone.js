
const imagens = [...document.querySelectorAll('.galeria img')]; // Pegando todas as imagens do container
const imagemtroca = document.querySelector('.imagemacima img' )
const nextBtn = document.querySelector('.direita1');
const prevBtn = document.querySelector('.esquerda1');






let index = 0;

function updateCarousel2() {
  const imagem = imagens.find(
    img => Number(img.dataset.valor) == index
  );

  if (imagem) {
    imgSelecionada = imagem.src;
    imagemtroca.src = imgSelecionada;
    imagens.forEach((i) => {
          i.classList.remove('selecionado');
        })
    imagem.classList.add('selecionado');
  }
  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.style.display = index === (imagens.length-1) ? "none" : "block";
}

function tratar(){
  prevBtn.style.display = index === 0 ? "none" : "block";
  nextBtn.style.display = index === (imagens.length-1) ? "none" : "block";
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




imagens.forEach((imagem,indext) => {
    imagem.addEventListener('click',() =>{
        const imgSelecionada = imagem.src;
        imagemtroca.src = imgSelecionada;
        index= indext;
        tratar();

        imagens.forEach((i) => {
          i.classList.remove('selecionado');
        })

        imagem.classList.add('selecionado');
    })
})






    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');

    // Abrir modal
    openBtn.addEventListener('click', () => {
      modalOverlay.classList.add('active');
    });

    // Fechar modal
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    // Fechar clicando fora do modal
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });











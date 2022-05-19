const botaoMobile = document.querySelector('.botao__mobile');
const menuMobile = document.querySelector('.menu');

botaoMobile.addEventListener('click' , () => {
    menuMobile.classList.toggle('active')
})

ScrollReveal({
    duration: 1700,
}).reveal(`
  .cabecalho,
  .chamada,
  .logo__anunciantes,
  .anuncio-1,
  .anuncio-2,
  .produtos__titulo,
  .descricao__produto,
  .produtos,
  .citacao,
  .contato,
  .rodape`);
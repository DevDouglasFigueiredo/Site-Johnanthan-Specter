const botao__mobile = document.getElementsByClassName('botao__menu');

function toggleMenu(){
    const menu__nav = document.getElementsByClassName('menu__nav');
    menu__nav.classlist.toggle('active');
}

botao__mobile.addEventListener('click', toggleMenu);
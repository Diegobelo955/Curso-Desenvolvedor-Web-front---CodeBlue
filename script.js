
    const hamburguer= document.getElementById('hamburguer');

    const navUL = document.getElementById('nav-ul');

    const principal = document.getElementById('apresentation');

    hamburguer.addEventListener('click', () => {
        navUL.classList.toggle('show'),
        principal.classList.add('teste')
    });


// Fixar o topo

window.onscroll = function(){myFunction()};
var header = document.getElementById('myHeader')
var topoFixo = header.offsetTop;

function myFunction() {
    if(window.pageYOffset > topoFixo) {
        header.classList.add('topo-fixo');
    }
    else {
        header.classList.remove('topo-fixo')
    }
}


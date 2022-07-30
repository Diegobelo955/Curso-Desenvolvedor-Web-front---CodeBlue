
    const hamburguer= document.getElementById('hamburguer');

    const navUL = document.getElementById('nav-ul');

    const principal = document.getElementById('apresentation');

    hamburguer.addEventListener('click', () => {
        navUL.classList.toggle('show'),
        principal.classList.add('teste')
    });





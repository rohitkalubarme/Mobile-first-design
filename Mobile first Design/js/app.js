const Hamburger = document.querySelector('.hamburger');
const Nav = document.querySelector('.Nav-list');

Hamburger.addEventListener('click',()=>{
    Nav.classList.toggle('show');
})


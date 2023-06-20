const boton = document.querySelector('.boton')
const nav = document.querySelector('.nav-menu')

boton.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})
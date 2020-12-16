//INICIANDO AOS==============================================
AOS.init();

//FECHA DINÁMICA==============================================
const date = document.getElementById('date')
const year = new Date().getFullYear()
date.textContent = `Pampered by IdeaWorks ${year}`


//ANIMACIÓN MENÚ===============================================
//Variables
const btnMenu = document.getElementById('btnMenu')
const mobileMenu = document.getElementById('mobileMenu')
const blur = document.getElementById('blur')
const links = document.querySelectorAll('.link')
let menuState = false

//eventos
btnMenu.addEventListener('click', toggleEffect)
blur.addEventListener('click', toggleEffect)
links.forEach(link=>{
    link.addEventListener('click', toggleEffect)
})
document.addEventListener('keydown', (e)=>{
    e.key === 'Escape' && toggleEffect()
})

//funciones
function toggleEffect(){
    if(menuState){
        menuState = false
        btnMenu.classList.remove('active')
        mobileMenu.classList.remove('active')
        blur.style.opacity = '0'
        setTimeout(()=>{
            blur.style.display = 'none'
        }, 250)

        //Habilitar scroll
        window.onscroll = null;
        
    } else {
        menuState = true
        btnMenu.classList.add('active')
        mobileMenu.classList.add('active')
        blur.style.display = 'block'
        setTimeout(()=>{
            blur.style.opacity = '1'
        }, 10)

        //Bloquear scroll
        let x = window.scrollX;
        let y = window.scrollY;
        window.onscroll = function(){ window.scrollTo(x, y) };
    }
}
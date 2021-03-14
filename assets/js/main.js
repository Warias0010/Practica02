let menuclick= document.getElementById('menu-click')
let enlaces= document.querySelector('.enlaces-header')
console.log(enlaces)

menuclick.addEventListener('click', ()=>{
enlaces.classList.toggle('click');
/*
enlaces.style.ClipPath= 'circle(150% at 100% 0);';
enlaces.style.transition= 'clip-path 2s'*/
});



let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;

let tamanoWidth = sliderInd[0].clientWidth;

setInterval(function tiempo() {
    slide();
}, 3000);



function slide() {
    slider.style.transform = `translate(${-tamanoWidth * contador}px)`
    slider.style.transition = 'transform .1s';
    contador++;
    if (contador === sliderInd.length) {
        
        setTimeout(() => {
            slider.style.transform = `translate(0px)`;
            slider.style.transition = ' all transform 0s';
            contador = 0;
        }, 3600)
        
    }

    console.log(slider.style.transform);
}



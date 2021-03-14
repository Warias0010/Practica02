let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;

let tamanoWidth = sliderInd[0].clientWidth;

setInterval(function tiempo() {
    slide();
}, 3000);



function slide() {
    slider.style.transform = `translate(${-tamanoWidth * contador}px)`
    slider.style.transition = 'transform 2s';
    contador++;
    if (contador === sliderInd.length) {
        contador = 0;
        setTimeout(() => {
            slider.style.transform = `translate(0px)`;
            slider.style.transition = ' all transform 0s';
            
        }, 1500)
        
    }


}

console.log(slider.style.transform);

let slides = document.getElementByClassName('custom-carousel-item');

let index = 0;

function prev() {
showSlide(--index);
}

function next(){
showSlide(++index);
}

const next_btn = document.getElementByClassName('custom-carousel-control-next') [0];
const prev_btn = document.getElementByClassName('custom-carousel-control-prev')[0];


//console.log(next_btn, prev_btn);

next_btn.addEventListener('click'.next);
prev_btn.addEventListener('click'.next);

function showSlide(i) {
	let slides = document.getElementByClassName('custom-carousel-item');

let slide = slides[i];

slides[i-1].classList.remove('active');
slide.classList.add('active');

console.log(i, slide.classList);
}




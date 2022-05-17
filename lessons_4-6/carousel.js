

let index = 0;

function prev() {
showSlide(--index);
}

function next(){
showSlide(++index);
}

function currentSlide(i) {
	showSlide(index = i);
}

const next_btn = document.getElementsByClassName('custon-carousel-control-next')[0];
const prev_btn = document.getElementsByClassName('custom-carousel-control-prev')[0];

next_btn.addEventListener('click', next);
prev_btn.addEventListener('click', prev);

function showSlide(i) {
	let slides = document.getElementsByClassName('custom-carousel-item');
	let length = slides.length - 1;

	if (i < 1) {
		index = length;
	}

	if (i > length){
		index = 0;
	}

	

let slide = slides[index];

for (let element of slides) {
	element.classList.remove('active');
}
 
slide.classList.add('active');

console.log(i, slide.classList);
}




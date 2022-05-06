let i=0;


function hello(){
    let counter = document.getElementById('counter');
    counter.innerText = ++i;
}

function prev() {
    let counter = document.getElementById('counter');
    counter.innerText = --i;
}

function next(){
    let counter = document.getElementById('counter');
    counter.innerText = ++i;
}

function handler(){
    let color = ['#333333','#8f9873','#d10374','#09f919','#f8d555','#8c8444'];
    this.style.background = color[0];
}

let btns = document.getElementByClassName('btn');

for (let i=0; i< btns.length; i++) {
    btns(i).addEventListener('click',handler);
}
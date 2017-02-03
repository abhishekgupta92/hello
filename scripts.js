'use strict';

var a;

function callme() {
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "red";
    document.body.innerHTML = window.innerWidth;
}

document.addEventListener('click', callme);

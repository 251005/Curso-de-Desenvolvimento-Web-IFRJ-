'use strict'

// programando o botão abrir e fechar
let btn_open = document.getElementById('btn_open');
let btn_close = document.getElementById('btn_close');
let nav_btn = document.getElementById('nav_btn');


//abrindo 
btn_open.addEventListener('click', function(){
    nav_btn.style.right = '0%';
});
// fechando
btn_close.addEventListener('click', function(){
    nav_btn.style.right = '-100%';
});

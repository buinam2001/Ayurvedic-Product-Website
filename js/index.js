let menu = document.querySelector('.nav_list');
let coating = document.querySelector('.coating');
let overflow = document.querySelector('.overflow');


function handledisplay (){

    menu.style.left = 0;
    coating.style.display = 'block';
    overflow.style.overflow = 'hidden';
   
}

function handleclose (){
    menu.style.left = -100 + '%';
    coating.style.display = 'none';
    overflow.style.overflow = 'auto';
}
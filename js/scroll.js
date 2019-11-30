
/***************** PROGRESS BAR **********/

const progress = document.querySelector('.progress-bar__progress');

window.addEventListener('scroll', progressBar);

function progressBar(event) {
    let windowScroll = document.documentElement.scrollTop || document.body.scrollTop; 
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
}

/********************** OPEN CLOSE MENU */

const btn = document.querySelector('.cirlce');
const close = document.querySelector('.overlay__close');

btn.addEventListener('click', ()=> {
    document.querySelector('.overlay').style.height = '100%';
})

close.addEventListener('click', ()=> {
    document.querySelector('.overlay').style.height = '0';
})

/********************* STIKY HEADER */

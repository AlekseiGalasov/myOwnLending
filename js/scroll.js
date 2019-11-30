const progress = document.querySelector('.progress-bar__progress');

window.addEventListener('scroll', progressBar);

function progressBar(event) {
    let windowScroll = document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
}

/***************** PROGRESS BAR **********/

const progress = document.querySelector('.progress-bar__progress');

window.addEventListener('scroll', progressBar);

function progressBar(event) {
    let windowScroll = document.documentElement.scrollTop || document.body.scrollTop; 
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
}

/********************** OPEN CLOSE MENU **********/

const btn = document.querySelector('.cirlce');
const close = document.querySelector('.overlay__close');

btn.addEventListener('click', ()=> {
    document.querySelector('.overlay').style.height = '100%';
})

close.addEventListener('click', ()=> {
    document.querySelector('.overlay').style.height = '0';
})

/******************************* SLIDER *********/



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// First level slider

const wrapper =  document.querySelector('.scene');
const slide = document.querySelector('.slide');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev__img'),
next = document.querySelector('.next__img'),
wrapperWidth = slides.length;

slides.x = 0;
slides.step = slide.offsetWidth;
slides.forEach(slide => {
    slide.style.left = slides.x + 'px';
    slides.x += slides.step;

});
slides.x = 0;

prev.addEventListener('click', () => {
    
    slides.forEach(slide => {
        let x = slide.offsetWidth;
        slides.x = slide.offsetLeft + x;
        slide.style.left = slides.x + 'px';
        
        if(slide.offsetLeft == (slide.offsetWidth * slides.length)) {
            slide.style.left = (0) + 'px';
        }
    });
})

next.addEventListener('click', () => {
    
    slides.forEach(slide => {
        let x = slide.offsetWidth;
        console.log(x);
        slides.x = slide.offsetLeft - x;
        console.log(slide.offsetLeft);
        slide.style.left = slides.x + 'px';

        if(slide.offsetLeft == -(slide.offsetWidth * slides.length)) {
            slide.style.left = 0 + 'px';
        }

    });
})


/********* NAV HIGHLIGHT *****************/

const nav = document.querySelectorAll('.nav__item')
const section = document.querySelectorAll('section');
let navArr = [];
nav.forEach(li => {
    navArr.push(li);
})
let secArr = [];
section.forEach(sec => {
    secArr.push(sec);
})

window.addEventListener('scroll', highLight);
function highLight() {
    for(let i = 0;i < secArr.length;i++) {
        navArr[i].style.color = '#F2F2F2';
        if ((document.documentElement.scrollTop + 125) > secArr[i].offsetTop && (document.documentElement.scrollTop + 125) <  (Math.floor(secArr[i].getBoundingClientRect().height + secArr[i].offsetTop))) {
            navArr[i].style.color = '#EC5E5E';
        }
    }
 }

 /********************** SCROLL TO BLOCK **************************/
let navObj = {};

section.forEach(sec => {
    navObj[sec.classList] = sec.offsetTop - 120;
})
navArr[0].addEventListener('click', () => {
    window.scrollTo(0, navObj.about_me);
})

navArr[1].addEventListener('click', () => {
    window.scrollTo(0, navObj.skills);
})

navArr[2].addEventListener('click', () => {
    window.scrollTo(0, navObj.works);
})

navArr[3].addEventListener('click', () => {
    window.scrollTo(0, navObj.offer);
})

navArr[4].addEventListener('click', () => {
    window.scrollTo(0, navObj.form);
})

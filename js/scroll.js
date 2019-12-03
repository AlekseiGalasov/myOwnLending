
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
        
        if(slide.offsetLeft == '3258') {
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

        if(slide.offsetLeft == '-3258') {
            slide.style.left = 0 + 'px';
        }

    });
})


/********* NAV HIGHLIGHT */

const about = document.querySelector('.about_me');
const skills = document.querySelector('.skills');
const works = document.querySelector('.works');
const offer = document.querySelector('.offer');
const form = document.querySelector('.form');
const nav = document.querySelectorAll('.nav__link')
let navArr = [];
nav.forEach(li => {
    navArr.push(li);
})
window.addEventListener('scroll', highLight);
function highLight() {


    console.log(about.offsetTop);
    console.log(Math.floor(about.getBoundingClientRect().height));

   if ((document.documentElement.scrollTop + 125) > about.offsetTop && (document.documentElement.scrollTop + 125) <  (Math.floor(about.getBoundingClientRect().height))) {   
    navArr[0].style.color = '#EC5E5E';
    navArr[1].style.color = '#F2F2F2';
    navArr[2].style.color = '#F2F2F2';
    navArr[3].style.color = '#F2F2F2';
    navArr[4].style.color = '#F2F2F2';

    } else if ((document.documentElement.scrollTop + 125) > skills.offsetTop && (document.documentElement.scrollTop + 125) <  (Math.floor(skills.getBoundingClientRect().height + skills.offsetTop))) {
        navArr[1].style.color = '#EC5E5E';
        navArr[0].style.color = '#F2F2F2';
        navArr[2].style.color = '#F2F2F2';
        navArr[3].style.color = '#F2F2F2';
        navArr[4].style.color = '#F2F2F2';
    } else if ((document.documentElement.scrollTop + 125) > works.offsetTop && (document.documentElement.scrollTop + 125) <  (Math.floor(works.getBoundingClientRect().height + works.offsetTop))) {
        navArr[2].style.color = '#EC5E5E';
        navArr[0].style.color = '#F2F2F2';
        navArr[1].style.color = '#F2F2F2';
        navArr[3].style.color = '#F2F2F2';
        navArr[4].style.color = '#F2F2F2';
    } else if ((document.documentElement.scrollTop + 125) > offer.offsetTop && (document.documentElement.scrollTop + 125) <  (Math.floor(offer.getBoundingClientRect().height + offer.offsetTop))) {
        navArr[3].style.color = '#EC5E5E';
        navArr[0].style.color = '#F2F2F2';
        navArr[1].style.color = '#F2F2F2';
        navArr[2].style.color = '#F2F2F2';
        navArr[4].style.color = '#F2F2F2';
    } else if ((document.documentElement.scrollTop + 125) > form.offsetTop && (document.documentElement.scrollTop + 125) <  (Math.floor(form.getBoundingClientRect().height + form.offsetTop))) {
        navArr[4].style.color = '#EC5E5E';
        navArr[0].style.color = '#F2F2F2';
        navArr[1].style.color = '#F2F2F2';
        navArr[2].style.color = '#F2F2F2';
        navArr[3].style.color = '#F2F2F2';
    }
}
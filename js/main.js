
/***************** PROGRESS BAR **********/

function progressBar() {

    const progress = document.querySelector('.progress-bar__progress');
    
    window.addEventListener('scroll', progressBar);
    
    function progressBar(event) {
        let windowScroll = document.documentElement.scrollTop || document.body.scrollTop; 
        let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let per = windowScroll / windowHeight * 100;
        progress.style.width = per + '%';
    }
    }
    /********************** OPEN CLOSE MENU **********/
    
    function toggleMenu() {
    
    const btn = document.querySelector('.cirlce');
    const close = document.querySelector('.overlay__close');
    
    btn.addEventListener('click', ()=> {
        document.querySelector('.overlay').style.height = '100%';
    })
    
    close.addEventListener('click', ()=> {
        document.querySelector('.overlay').style.height = '0';
    })
    }
    
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
    
    
    
    // First level slider///
    
    
    const wrapper =  document.querySelector('.scene');
    const prev = document.querySelector('.prev__img'),
    next = document.querySelector('.next__img')
    
    let slideIndexFirst = 1;
    showSlidesFirst(slideIndexFirst);
    
    next.addEventListener('click', ()=> {
        showSlidesFirst(slideIndexFirst += 1)
        if((slideIndex += 5) > 18) {
            showSlides(slideIndex = 1);
        } else {
            showSlides(slideIndex += 1);
        }
        
    })
    
    prev.addEventListener('click', ()=> {
        showSlidesFirst(slideIndexFirst -= 1)
        if((slideIndex -= 5) < 1) {
            showSlides(slideIndex = 18);
        } else {
            showSlides(slideIndex -= 1);
        }
       
    })
    
    function showSlidesFirst(n) {
        let i;
        const slides = document.querySelectorAll('.slide');
        if(n > slides.length) {slideIndexFirst = 1}
        if(n < 1) {slideIndexFirst = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndexFirst-1].style.display = "grid";
    }
    
    
    /********* NAV HIGHLIGHT *****************/
    
    function navHighLight() {
    
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
    
    /* Mobile scroll */
    
    navArr[5].addEventListener('click', () => {
        window.scrollTo(0, navObj.about_me);
    })
    
    navArr[6].addEventListener('click', () => {
        window.scrollTo(0, navObj.skills);
    })
    
    navArr[7].addEventListener('click', () => {
        window.scrollTo(0, navObj.works);
    })
    
    navArr[8].addEventListener('click', () => {
        window.scrollTo(0, navObj.offer);
    })
    
    navArr[9].addEventListener('click', () => {
        window.scrollTo(0, navObj.form);
    })
    
    /* Mobile scroll */
    
     }
    
    
    /* Choose Files */
    
    
    var input = document.querySelector('.form-wrapper__input_file');
      var label	 = document.querySelector('.form-wrapper_text'),
          labelVal = label.innerHTML;
      input.addEventListener('change', function(e){
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName = e.target.value.split( '\\' ).pop();
            if( fileName )
          label.innerHTML = fileName;
        else
          label.innerHTML = labelVal;
        });
    
    
    
    progressBar();
    toggleMenu();
    navHighLight();
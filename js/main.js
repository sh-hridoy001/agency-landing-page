const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_manu');

// event listener 
navTriggerBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('nav-is-open');
});



//_____swiper js______
const swiper = new Swiper(".swiper",{
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Optional parameters
    speed:400,
    spaceBetween: 30,
    autoplay: {
    delay:3000,
    disableOnInteraction: false
    },
    //____breakpoints____
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,   
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        960: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});



//scroll reveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance:'60px',
    duration: 3000,
    delay: 600,
    //reset: true,
});

//__________HERO____________
sr.reveal('.hero__text', {origin:'top'});


//__________STEPS____________
sr.reveal('.steps__step', {distance: '100px', interval:100});


//__________ABOUT______________
sr.reveal('.about__text', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right', delay:800});


//__________TESTIMONIAL__________
sr.reveal('.testimonial__bg', {delay:800});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', {delay:1000});


//___________BRANDS_____________
sr.reveal('.brand__img', { delay:600, distance: '100px', interval:100});


//____________WORKS______________
sr.reveal('.work__title');
sr.reveal('.work__subtitle', {delay:800 } );
sr.reveal('.work__grid', {delay:1000 } );


//___________STATS________________
sr.reveal('.stats');
sr.reveal('.stats__item', { distance: '100px', interval:100});


//___________NEWS________________
sr.reveal('.news__title');
sr.reveal('.news__subtitle', {delay:800 } );
sr.reveal('.news__item', { delay:1000, distance: '100px', interval:100});


//____________CONTACXT______________
sr.reveal('.contact');
sr.reveal('.contact__text', {delay:800} );


//___________FOOTER__________________
sr.reveal('.Footer__item', {distance: '100px', interval:100} )
sr.reveal('.footer__copyright');


/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("Scroll-up")

  if(this.scrollY >=250) {
    scrollUpBtn.classList.remove("-bottom-1/2")
    scrollUpBtn.classList.add("bottom-4")
  } else {
    scrollUpBtn.classList.add("-bottom-1/2")
    scrollUpBtn.classList.remove("bottom-4")
  }
}

window.addEventListener("scroll",scrollUp)



/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.getElementById("navbar")

  if(this.scrollY >=50) {
    header.classList.add("border-b", "border-yellow-500")
  } else {
    header.classList.remove("border-b", "border-yellow-500")
  }
}

window.addEventListener("scroll",scrollHeader)
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
sr.reveal('.hero__text',{origin:'top'})

//__________STEPS____________
sr.reveal('.steps__step',{distance: '100px', interval:100})

//__________ABOUT____________
sr.reveal('.about__text',{origin: 'left'})

sr.reveal('.about__img',{origin: 'right', delay:800})


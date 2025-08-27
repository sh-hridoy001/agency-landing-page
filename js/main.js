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

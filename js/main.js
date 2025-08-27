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

    //____breakpoints____
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
    },
});

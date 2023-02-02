window.addEventListener('load', ()=>{
    var nav = document.querySelector('aside'),
        navList = document.querySelectorAll('nav li');

    var mainSwiper = new Swiper(".main-swiper-container", {
        slidesPerView: 1,
        mousewheel: true,
    });

    var workSwiper = new Swiper(".work-swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        mousewheel: false,
    });

    mainSwiper.on('slideChange', (e) => {
        var idx = mainSwiper.activeIndex;
        idx == 0 ? nav.classList.remove('b') : nav.classList.add('b') ;
        
    });

    navList.forEach(e=>{
        e.addEventListener('click', e=>{
            var idx = e.target.attributes.index.value
            mainSwiper.slideTo(idx)
        })
    })

})

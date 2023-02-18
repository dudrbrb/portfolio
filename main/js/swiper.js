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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    mainSwiper.on('slideChange', (e) => {
        var idx = mainSwiper.activeIndex;
        idx == 0 ? nav.classList.remove('b') : nav.classList.add('b') ;
        mainSwiper.allowSlideNext = (idx==2 ? false :  true)
        
    });

    navList.forEach(e=>{
        e.addEventListener('click', e=>{
            var idx = e.target.attributes.index.value
            mainSwiper.slideTo(idx)
        })
    })

    var btn = document.querySelector('.arrow');
    btn.addEventListener('click', ()=>{
        mainSwiper.slideTo(1)
    })
})

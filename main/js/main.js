window.addEventListener('load', ()=>{
    makeStackList()
    makeWorkList()
})

var makeStackList = ()=>{
    var stackList = ['Html5', 'Css3', 'Javascript', 'j-query', 'Vue', 'Nuxt.js', 'Scss', 'Python', 'Django', 'pandas', 'Crawling', 'Scraping', 'Axios', 'Ajax', 'MongoDB Atlas', 'REST API', 'Adobe Photoshop', 'Adobe XD', 'Figma', 'TweenMax', 'ScrollMagic'];
    var list = document.querySelector('.stack_list');

    stackList.forEach(stack => {
        list.innerHTML += `<li>${stack}</li>`
    })
}

var makeWorkList = ()=>{
    var workList = [
        {title: '롯데백화점 - 하이틴주인공 MBTI테스트',
        description: '배포 당시 네이버 실시간 인기검색어 1위 \n 선택지에 따른 최종 결과 도출',
        stacks : ['Html', 'Css', 'Javascript', 'Ajax', 'Swiper.js'],
        link: '../highteen_test', 
        year: '2020',
        img: 'highteen.png'
        },
        {title: 'SK magic - 실시간 투표 이벤트',
        description: 'Ajax통신을 이용해 사용자 투표율이 실시간으로 반영되어 보여지는 이벤트',
        stacks : ['Html', 'Css', 'Javascript', 'Ajax', 'Swiper.js'],
        link: '../skmagic/love',
        year: '2020',
        img: 'love.png'
        },
        {title: 'SK magic - 모바일 매거진',
        description: '스크롤에 따라 인터렉티브 모션이 나타나는 모바일 매거진',
        stacks : ['Html', 'Css', 'Javascript', 'TweenMax', 'ScrollMagic'],
        link: '../skmagic/tip',
        year: '2020',
        img: 'tip.png'
        },
        {title: '현대캐피탈 - 직원 전용 모바일 매거진',
        description: '인터렉티브 모션이 나타나는 스와이퍼 모바일 매거진',
        stacks : ['Html', 'Css', 'Javascript', 'TweenMax', 'Swiper.js'],
        link: '../licence',
        year: '2019',
        img: 'capital.png'
        },
        {title: '법무법인 예율 - 성범죄 전문센터',
        description: 'Full Page 모바일 반응형 사이트 \n SEO최적화 작업',
        stacks : ['Vue', 'Nuxt.js', 'Scss', 'mySql'],
        link: 'https://xn--z92bxyh5hlbx19c56ak97a.kr/',
        year: '2022',
        img: 'yeyul.png'
        },
        {title: '법무법인 예율 - 외국인 상담 사이트',
        description: '스크롤에 따라 인터렉티브 모션이 나타나는 홈페이지',
        stacks : ['Vue', 'Nuxt.js', 'Scss', 'email.js'],
        link: 'https://foreigner.lawfirmy.com/',
        year: '2022',
        img: 'yeyul-f.png'
        },
        {title: '서울과학기술대학교 산업디자인과 졸업전시 홈페이지',
        description: '2022년도 졸업전시회 안내 및 방명록, 전시자 관리자페이지 개발',
        stacks : ['Vue', 'Nuxt.js', 'Scss', 'MongoDB Atlas', 'Axios'],
        link: 'http://www.seoultech-id-degreeshow-2022.com',
        year: 2022,
        img: 'seoultech.png',
        },
        {title: 'Speakcls 홈페이지',
        description: '화상영어과외 회사 반응형 홈페이지',
        stacks : ['Vue', 'Nuxt.js', 'Scss', 'MongoDB Atlas', 'Axios'],
        link: 'http://www.speakcls.co.kr',
        year: '2022',
        img: 'speakcls.png'
        },
        {title: '익선동 홍보 홈페이지',
        description: '국제 커뮤니케이션 디자인 어워드 입상 \n비상업 목적의 익선동 홍보 홈페이지 개발',
        stacks : ['Html', 'Css', 'Swiper.js'],
        link: '../ikseon-dong',
        year: '2018',
        img: 'ikseondong.png'
        },
         {title: 'Ferrari - News Letter',
        description: '카드 모션을 이용한 월간 뉴스레터',
        stacks : ['Html', 'Css', 'Javascript', 'TweenMax', 'Swiper.js'],
//         link: 'http://ferrarifmk.com',
        year: '2021',
        img: 'ferrari.png'
        },
        {title: '투플 곱창 홈페이지',
        description: '투뿔 곱창 및 막창 제품 소개 반응형 홈페이지',
        stacks :  ['Vue', 'Nuxt.js', 'Scss', 'email.js'],
        // link: 'http://twople-store.com/',
        link: null,
        year: '2022',
        img: 'twople.jpg'
        },
        {title: 'NOW FITNESS',
        description: 'NOW FITNESS 시설 소개 및 프로그램 안내 반응형 홈페이지',
        stacks :  ['Vue', 'Nuxt.js', 'Scss', 'email.js'],
        // link: 'http://twople-store.com/',
        link: null,
        year: '2022',
        img: 'nowfitness.png'
        },
    ]
    var list = document.querySelector('.work_list');

    workList.forEach((work, idx) => {
        list.innerHTML += `<div class='swiper-slide work_box'>
                                <a ${work.link == null ? '' : 'href='+work.link } class='thumb' target="_blank" >
                                    <img src='./img/thumb/${work.img}' />
                                </a>
                                <div class='info'>
                                    <p><b>${work.title}</b> <span>${work.year}년 </span></p>
                                    <ul class='stacks'></ul>
                                    <p>${work.description}</p>
                                </div>
                                <div class="dim ${work.link == null ? 'fin' : ''}">
                                    호스팅 기간 만료
                                </diV>
                            </div>`;

        makeWorksStack(work.stacks, idx)
    })
}

var makeWorksStack = (stacks, idx)=>{
    setTimeout(() => {
        var stackList = document.querySelector(`.work_box:nth-child(${(idx+1)}) .stacks`)
        stacks.forEach(stack =>{
            stackList.innerHTML += `<li>${stack}</li>`
        })
    }, 300);
}


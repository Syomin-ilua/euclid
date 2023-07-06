// Бургер меню
const btnBurger = document.querySelector('.burger__menu');
const menuLinks = document.querySelector('.menu__links');

btnBurger.addEventListener('click', function(e) {
    e.preventDefault();

    if(btnBurger.classList.contains('active')) {
        btnBurger.classList.remove('active');
        menuLinks.classList.remove('active');
        scrollController.enabledScroll();
    } else {
        btnBurger.classList.add('active');
        menuLinks.classList.add('active');
        scrollController.disabledScroll();
    }


    if(seacrhForm.classList.contains('active')) {
        seacrhForm.classList.remove('active');
    }
});

const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = 
        `
            position: fixed;
            overflow: hidden;
            top: -${scrollController.scrollPosition}px;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    }, 
    enabledScroll() {
        document.body.style.cssText = '';
        window.scroll({top: scrollController.scrollPosition})
        document.documentElement.style.scrollBehavior = '';
    }
}

// Основной слайдер

$('.slider__wrapper').slick({
    arrows: false,
    dots: true,
});

// Табы для секции "Как мы работаем"

const tabButtons = document.querySelectorAll('.tab');
const tabItems = document.querySelectorAll('.tab__item');

tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', function(e) {
        e.preventDefault();

        let currentBtn = tabButton;
        let tabID = currentBtn.getAttribute("data-tab");
        let currentTab = document.getElementById(tabID);

        if(!currentBtn.classList.contains('active')) {
            tabButtons.forEach(item => {
                item.classList.remove('active');
            });
            tabItems.forEach(item => {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
            gsap.from('.item__leftSide', {opacity: 0, duration: 1, x: -100});
            gsap.from('.item__rightSide', {opacity: 0, duration: 1, x: 100});
        }
    });
})

document.querySelector('.tab__one').click();

// Аккордион

const accordionHeader = document.querySelectorAll('.accordion__header');
const questions = document.querySelectorAll('.accordion__header');

accordionHeader.forEach(accordion => {
    accordion.addEventListener('click', function(e) {
        e.preventDefault();

        let accordionActual = accordion.getAttribute('data-id');
        let question = document.getElementById(accordionActual);

        let content = accordion.nextElementSibling;
        
        if(content.style.maxHeight) {
            document.querySelectorAll('.accordion__text').forEach(el => {
                el.style.maxHeight = null;
            });
            questions.forEach(question => {
                question.classList.remove('active');
            });
        } else {
            document.querySelectorAll('.accordion__text').forEach(el => {
                el.style.maxHeight = null;
                question.classList.remove('active');
            });
            questions.forEach(question => {
                question.classList.remove('active');
            });
            question.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})

// Ссылки на секции
const linksDesktop = document.querySelectorAll('a[href*="#"]');

for(let link of linksDesktop) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const blockID = link.getAttribute('href');

        if(e.target.classList.contains('linkDesktop')) {
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            btnBurger.classList.toggle('active');
            menuLinks.classList.toggle('active');
            scrollController.enabledScroll();
            
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }    
    })
}

const searchBtn = document.querySelectorAll('.search');
const searchCloseButton = document.querySelector('.search__close_btn');
const seacrhForm = document.querySelector('.search__form');
const searchButton = document.querySelector('.search__button');

searchBtn.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        if(btnBurger.classList.contains('active')) {
            btnBurger.classList.remove('active');
            menuLinks.classList.remove('active');
            scrollController.enabledScroll();
        }

        seacrhForm.classList.add('active');

    })
});

searchCloseButton.addEventListener('click', function(e) {
    e.preventDefault();

    seacrhForm.classList.remove('active');
});

searchButton.addEventListener('click', function(e) {
    e.preventDefault();
    
});

const headerCap = document.querySelector('.header__cap');

window.addEventListener('scroll', function (e) { 
    e.preventDefault();

    let scrollPage = Math.floor(this.scrollY);

    if(scrollPage >= 0) {
        headerCap.classList.add('header__cap_fixed');
    }
});
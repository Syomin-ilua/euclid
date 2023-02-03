// Бургер меню
const btnBurger = document.querySelector('.burger__menu');
const menuLinks = document.querySelector('.menu__links');

btnBurger.addEventListener('click', function(e) {
    e.preventDefault();

    btnBurger.classList.toggle('active');
    menuLinks.classList.toggle('active');

    if(menuLinks.classList.contains('active')) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = '100%';
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
    }
});

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

            if(menuLinks.classList.contains('active')) {
                document.body.style.position = 'fixed';
                document.body.style.top = `-${window.scrollY}px`;
                document.body.style.width = '100%';
            } else {
                document.body.style.position = '';
                document.body.style.top = '';
            }

            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }    
    })
}

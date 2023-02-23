"use strict";

//variables

const header = document.querySelector(".page__header");
let headerHeight = `${header.offsetHeight}px`;

const main = document.querySelector(".page__main");
main.style.paddingTop = headerHeight;

const nav = document.querySelector(".header__nav");
nav.style.top = headerHeight;

const navListInsert = document.querySelector(".nav__list--insert");

const navInsertLink = document.querySelector(".nav__link--insert");
const navInsertIcon = document.querySelector(".link__icon--nav");

const menu = document.querySelector(".header__menu");

const slider = document.querySelector(".slider__list");
const sliderItems = Array.from(slider.children);

const carouselContain = document.querySelector(".main__carousel");
const carousel = carouselContain.querySelector(".carousel__list");
const carouselItems = Array.from(carousel.children);

const btnNext = document.querySelector(".controls__btn--next");
const btnPrev = document.querySelector(".controls__btn--prev");

const carouselBtnNext = carouselContain.querySelector(".controls__btn--next");
const carouselBtnPrev = carouselContain.querySelector(".controls__btn--prev");

const catalogue = document.querySelector(".main__catalogue");
const tabBtns = catalogue.querySelectorAll(".tabs__btn");
const catalogueList = catalogue.querySelectorAll(".catalogue__list");


// eventListener

menu.addEventListener("click", toggleMenu);

navInsertLink.addEventListener("click", showNavInsert);

btnNext.addEventListener("click", showNewSlide);
btnPrev.addEventListener("click", showPrevSlide);

carouselBtnNext.addEventListener("click", showNextCarouselSlide);
carouselBtnPrev.addEventListener("click", showPrevCarouselSlide);

tabBtns.forEach(onTabClick);

//functions

// burger menu

function toggleMenu(evt) {
    evt.preventDefault();
    menu.classList.toggle("menu--open");
    nav.classList.toggle("header__nav--active");
}

function showNavInsert(evt) {
    evt.preventDefault();
    navListInsert.classList.toggle("nav__list--insert-active");
    navInsertIcon.classList.toggle("link__icon--nav-open");
}

// slider

sliderItems.forEach(function (slide, index) {

    // iterate over elements by index to add a class
    if (index !== 0) {
        slide.classList.add("slider__item--hidden")
    } else { 
        slide.classList.remove("slider__item--hidden");
    };

    // add data-index to html
    slide.dataset.index = index;

    // add data-active for active element
    sliderItems[0].setAttribute("data-active", "");

    slide.addEventListener("click", function () {
        slide.classList.add("slider__item--hidden");
        slide.removeAttribute("data-active");

        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1;
        };

        const nextSliderItem = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        nextSliderItem.classList.remove("slider__item--hidden");
        nextSliderItem.setAttribute("data-active", "");
    });
});

function showNewSlide(evt) {
    evt.preventDefault();
    const currentSlide = slider.querySelector("[data-active]");
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add("slider__item--hidden");
    currentSlide.removeAttribute("data-active");

    let nextSlideIndex;
    if (currentSlideIndex + 1 === sliderItems.length) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    };

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove("slider__item--hidden");
    nextSlide.setAttribute("data-active", "");
};

function showPrevSlide(evt) {
    evt.preventDefault();
    const currentSlide = slider.querySelector("[data-active]");
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add("slider__item--hidden");
    currentSlide.removeAttribute("data-active");

    let nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = sliderItems.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    };

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove("slider__item--hidden");
    nextSlide.setAttribute("data-active", "");
};


// sliderBottom

carouselItems.forEach(function (item, index) {

    // iterate over elements by index to add a class
    if (index !== 0) {
        item.classList.add("carousel__item--hidden")
    } else { 
        item.classList.remove("carousel__item--hidden");
    };

    // add data-index to html
    item.dataset.index = index;

    // add data-active for active element
    carouselItems[0].setAttribute("data-active", "");

    item.addEventListener("click", function () {
        item.classList.add("carousel__item--hidden");
        item.removeAttribute("data-active");

        let nextItemIndex;
        if (index + 1 === carouselItems.length) {
            nextItemIndex = 0;
        } else {
            nextItemIndex = index + 1;
        };

        const nextCarouselItem = carousel.querySelector(`[data-index="${nextItemIndex}"]`);

        nextCarouselItem.classList.remove("carousel__item--hidden");
        nextCarouselItem.setAttribute("data-active", "");
    });
});

function showNextCarouselSlide(evt) {
    evt.preventDefault();
    const currentItem = carousel.querySelector("[data-active]");
    const currentItemIndex = +currentItem.dataset.index;
    currentItem.classList.add("carousel__item--hidden");
    currentItem.removeAttribute("data-active");

    let nextItemIndex;
    if (currentItemIndex + 1 === carouselItems.length) {
        nextItemIndex = 0;
    } else {
        nextItemIndex = currentItemIndex + 1;
    };

    const nextItem = carousel.querySelector(`[data-index="${nextItemIndex}"]`);
    nextItem.classList.remove("carousel__item--hidden");
    nextItem.setAttribute("data-active", "");
};

function showPrevCarouselSlide(evt) {
    evt.preventDefault();
    const currentItem = carousel.querySelector("[data-active]");
    const currentItemIndex = +currentItem.dataset.index;
    currentItem.classList.add("carousel__item--hidden");
    currentItem.removeAttribute("data-active");

    let nextItemIndex;
    if (currentItemIndex === 0) {
        nextItemIndex = carouselItems.length - 1;
    } else {
        nextItemIndex = currentItemIndex - 1;
    };

    const nextItem = carousel.querySelector(`[data-index="${nextItemIndex}"]`);
    nextItem.classList.remove("carousel__item--hidden");
    nextItem.setAttribute("data-active", "");
};

// tab
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentTabBtn = item;
        let btnTabId = currentTabBtn.getAttribute("data-tab");
        let currentCatalogueList = document.querySelector(btnTabId);

        if(! currentTabBtn.classList.contains("btn--tab-active")) {
            tabBtns.forEach(function(item) {
                item.classList.remove("btn--tab-active");
            });
    
            catalogueList.forEach(function(item) {
                item.classList.remove("catalogue__list--active");
            });
            currentTabBtn.classList.add("btn--tab-active");
            currentCatalogueList.classList.add("catalogue__list--active");
        };  
    }); 
};

// virtual click
document.querySelector(".btn--tab").click();
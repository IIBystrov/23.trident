"use strict";

//variables

const header = document.querySelector(".page__header");
let headerHeight = `${header.offsetHeight}px`;

const main = document.querySelector(".page__main");
main.style.paddingTop = headerHeight;

const navActive = document.querySelector(".header__nav--active");
navActive.style.top = headerHeight;

const menu = document.querySelector(".header__menu");

const slider = document.querySelector(".slider__list");
const sliderItems = Array.from(slider.children);


const btnNext = document.querySelector(".controls__btn--next");
const btnPrev = document.querySelector(".controls__btn--prev");


// eventListener

menu.addEventListener("click", toggleMenu);

btnNext.addEventListener("click", showNewSlide);
btnPrev.addEventListener("click", showPrevSlide);


//functions

// burger menu

function toggleMenu(evt) {
    evt.preventDefault();
    menu.classList.toggle("menu--open");
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
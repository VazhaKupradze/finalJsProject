"use strict";

//#region Tour page slide

let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let slides = document.querySelectorAll('.coverSlide');
let numberOfSlides = slides.length;
let slideNumber = 0;

//next

nextBtn.onclick = () => {
    slides.forEach((coverSlide) => {
        coverSlide.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}

//prev

prevBtn.onclick = () => {
    slides.forEach((coverSlide) => {
        coverSlide.classList.remove('active');
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}

//#endregion
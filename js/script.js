"use strict";

// main page slider

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


// cookie 

let cookieWrap = document.querySelector(".cookie-wrapper"),
    buttons = document.querySelectorAll(".button");

let loadPage = () => {
    let cookieDisabled = window.localStorage.getItem('cookieAccepted')
    if (cookieDisabled !== "true") {
        cookieWrap.classList.remove("inActive");
        setTimeout(function () {
            cookieWrap.classList.add("show");
        }, 100);

    }

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            if (e.target.getAttribute("id") == "accept")
                window.localStorage.setItem("cookieAccepted", "true");

            cookieWrap.classList.remove("show");
            cookieWrap.classList.add("inActive")
        })
    })
};

window.addEventListener("load", loadPage);

//REGEX SAMPLE FOR EMAIL
function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}




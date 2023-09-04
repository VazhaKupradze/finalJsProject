"use strict";


document.querySelectorAll(".scrollDown").forEach(function (scrollToPage) {
  scrollToPage.addEventListener("click", function (e) {
    e.preventDefault();
    let href = e.target.getAttribute("href").substring(1);
    console.log(href);
    let offsetTop = document.getElementById(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});

let scrollToTop = document.querySelector(".chevron-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    scrollToTop.classList.add("topActive");
  } else {
    scrollToTop.classList.remove("topActive");
  }
});

scrollToTop.addEventListener("click", function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  })
});




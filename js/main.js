"use strict";


document.querySelectorAll(".scrollDown").forEach(function (scrollToPage) {
  scrollToPage.addEventListener("click", function (e) {
    if (location.href.indexOf("index.html") !== -1) {
      e.preventDefault();
      let href = e.target.href;
      if (href.indexOf("#") === -1)
        return;

      const elementId = href.split("#")[1];
      scrollToElement(elementId);
    }
  });
});

function scrollToElement(elementId) {
  let element = document.getElementById(elementId);
  if (!element)
    return;

  let offsetTop = element.offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

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

window.addEventListener("load", function () {
  if (location.href.indexOf("#") !== -1) {
    const elementId = location.href.split("#")[1];
    scrollToElement(elementId);
  }
});
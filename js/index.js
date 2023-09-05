"use strict";
//#region Scroll By click

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

//#endregion


//#region Scroll To Top

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

//#endregion


//#region Burger Bar

let burger = document.getElementById("burgerBar");
let navigation = document.getElementById("navBar");
let burgHeader = document.querySelector(".up-header");

burger.addEventListener("click", function () {
  navigation.classList.toggle("navActive");
  burgHeader.classList.toggle("headerActive");
});

//#endregion


//#region cookie file

let cookieWrap = document.querySelector(".cookie-wrapper"),
  buttons = document.querySelectorAll(".button");


buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") == "accept")
      window.localStorage.setItem("cookieAccepted", "true");

    cookieWrap.classList.remove("show");
    cookieWrap.classList.add("inActive")
  })
})

let loadPage = () => {
  let cookieDisabled = window.localStorage.getItem('cookieAccepted')
  if (cookieDisabled !== "true" && cookieWrap) {
    cookieWrap.classList.remove("inActive");
    setTimeout(function () {
      cookieWrap.classList.add("show");
    }, 100);

  }

  if (location.href.indexOf("#") !== -1) {
    const elementId = location.href.split("#")[1];
    scrollToElement(elementId);
  }
};

window.addEventListener("load", loadPage);

//#endregion
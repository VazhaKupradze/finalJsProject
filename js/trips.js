"use strict"

//#region Filter seasons

document.querySelectorAll(".trips-navs").forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        let category = e.target.href.split("#")[1];
        document.querySelectorAll(".trips-list-conteiner .trips-list").forEach(function (trip) {
            if (category === "all")
                addShowToTrip(trip);
            else if (trip.classList.contains(category))
                addShowToTrip(trip);
            else
                removeShowFromTrip(trip);
        });
    });
});

function removeShowFromTrip(trip) {
    if (trip.classList.contains("show"))
        trip.classList.remove("show");
}

function addShowToTrip(trip) {
    if (!trip.classList.contains("show"))
        trip.classList.add("show");
}

//#endregion


//#region chevron navigation

let chevron = document.getElementById("chevronBar");
let tripNav = document.getElementById("tripBar");
let chevIcon = document.getElementById("chevron-icon");


chevron.addEventListener("click", function () {
    tripNav.classList.toggle("chevronActive");
    if (chevIcon.classList.contains("fa-circle-chevron-down")) {
        chevIcon.classList.remove("fa-circle-chevron-down");
        chevIcon.classList.add("fa-circle-chevron-up");
    } else {
        chevIcon.classList.add("fa-circle-chevron-down");
        chevIcon.classList.remove("fa-circle-chevron-up");
    }
});

//#endregion
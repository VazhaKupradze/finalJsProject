"use strict"

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
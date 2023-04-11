"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchMenu();
}

function fetchMenu() {
    fetch("https://kempdewulf.me/api/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}
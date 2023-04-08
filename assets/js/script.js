"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchMenu();
}

function fetchMenu() {
    fetch("http://165.232.126.113/api/random")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}
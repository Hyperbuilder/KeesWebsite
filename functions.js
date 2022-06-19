var start = document.getElementById("navstart");

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 280) {
        myNav.classList.add("scroll");
    } else {
        myNav.classList.remove("scroll");
    }
};
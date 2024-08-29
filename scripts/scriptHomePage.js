document.querySelector("header .account span img").addEventListener("click", function () {
    var menu = document.querySelector("#submenu");
    var seta = document.querySelector("header .account span img");

    if (menu.style.opacity != "1") {
        menu.style.opacity = "1";
    } else {
        menu.style.opacity = "0";
    }

})
document.querySelector("header .account span img").addEventListener("click", function () {
    var menu = document.querySelector("#submenu");
    var seta = document.querySelector("header .account span img");

    if (menu.style.opacity != "1") {
        menu.style.opacity = "1";
    } else {
        menu.style.opacity = "0";
    }

})

//mostrar menu lateral
document.getElementById("showMenu").addEventListener("click", function () {
    var menuMoba = document.getElementById("menuMobile");

    if (menuMoba.style.display != "block") {
        menuMoba.style.display = "block";
    } else {
        menuMoba.style.display = "none";
    }
})

//fechar menu lateral
document.getElementById("icon-close").addEventListener("click", function () {
    var menu = document.getElementById("menuMobile");
    if (menu.style.display != "none") {
        menu.style.display = "none";
    }
})
import {navbarFun,footerFun,bottomFun,termsFun} from "/noble-volleyball-6086/navbar/nav&footer.js";
    let navbar = document.getElementById("navbar")
    navbar.innerHTML = navbarFun()

    let footer = document.getElementById("footer")
    footer.innerHTML = footerFun()

    let bottom_links = document.getElementById("bottom_links")
    bottom_links.innerHTML = bottomFun()

    let terms = document.getElementById("terms")
    terms.innerHTML = termsFun();
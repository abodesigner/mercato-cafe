document.addEventListener("DOMContentLoaded", function () {



    let links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function(e) {

            headerOffset = 50;
            elementPosition = link.getBoundingClientRect().top;
            let offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
           });


        })
    })








    window.addEventListener("scroll", function(){

        //console.log(window.scrollY);
        let shrinkHeader = 150;
        let mainNavbar = document.querySelector(".navbar-custom");
        let logo = document.querySelector(".logo");

        if ( window.scrollY > shrinkHeader ) {
            mainNavbar.classList.add("shrink");
            logo.classList.add("shrink");
        } else {
            mainNavbar.classList.remove("shrink");
            logo.classList.remove("shrink");
        }
    })
})
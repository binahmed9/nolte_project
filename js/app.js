// ==================(navbar)==================

const menu_hamburger = document.querySelector(".menu_hamburger");
const navbar = document.querySelector(".navbar");

{
    menu_hamburger.addEventListener("click", function () {
        console.log("open burger")

        if (menu_hamburger.classList.contains("open")) {
            // ==================


            // ((hamburger) => (remove("open")))
            menu_hamburger.classList.remove("open")

            // ((navbar) => (remove("active")))
            navbar.classList.remove("active")




        } else {
            // ==================

            // ((hamburger) => (add("open")))
            menu_hamburger.classList.add("open")

            // ((navbar) => (add("active")))
            navbar.classList.add("active")

            // ================(remove)====================
            search_container.classList.remove("active")
            shopping_container.classList.remove("active")
        }

    })
}


// ==================(hero)==================
{
    var swiper = new Swiper(".hero .container_slider", {
        spaceBetween: 20,
        effect: "fade",
        grabCursor: true,
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// ==================(scroll)==================
{
    // (container(toggle("active"))) == شادو
    window.onscroll = () => {

        if (window.scrollY > 60) {
            document.querySelector("#scroll_top").classList.add("active")
        } else {
            document.querySelector("#scroll_top").classList.remove("active")
        }

        // ================(remove)====================
        menu_hamburger.classList.remove("open")
        navbar.classList.remove("active")
    }
}
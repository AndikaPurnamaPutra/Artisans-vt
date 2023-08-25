// SLICK
$(document).ready(function () {
    // Inisialisasi slider untuk "Art"
    $(".slider-art").slick({
        variableWidth: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    });

    const prevBtnArt = document.getElementById("prev-btn-art");
    const nextBtnArt = document.getElementById("next-btn-art");

    // Menggeser slide ke kiri ketika tombol prev untuk "Art" diklik
    prevBtnArt.addEventListener("click", function () {
        $(".slider-art").slick("slickPrev");
    });

    // Menggeser slide ke kanan ketika tombol next untuk "Art" diklik
    nextBtnArt.addEventListener("click", function () {
        $(".slider-art").slick("slickNext");
    });

    // Inisialisasi slider untuk "Description"
    $(".slider-description").slick({
        variableWidth: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
    });

    const prevBtnDesc = document.getElementById("prev-btn-desc");
    const nextBtnDesc = document.getElementById("next-btn-desc");

    // Menggeser slide ke kiri ketika tombol prev untuk "Description" diklik
    prevBtnDesc.addEventListener("click", function () {
        $(".slider-description").slick("slickPrev");
    });

    // Menggeser slide ke kanan ketika tombol next untuk "Description" diklik
    nextBtnDesc.addEventListener("click", function () {
        $(".slider-description").slick("slickNext");
    });
});

// Navbar Mobile
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.toggle("active");
});

console.log("hallo");

// Navbar Responsive

// const navbarToggler = document.querySelector(".nav-btn-responsive");

// navbarToggler.addEventListener("click", function () {
//     document.querySelector(".nav-menu-responsive").classList.toggle("active");
// });

// logic respondsive
const navbar = document.getElementById("navbar");
const btnRes = document.querySelector(".nav-btn-responsive");
const menu = document.querySelector(".nav-menu");

btnRes.addEventListener("click", () => {
    menu.classList.toggle("active");
    btnRes.classList.toggle("cross");
    navbar.classList.toggle("active");
});

// Slick
$(document).ready(function () {
	// Inisialisasi slider untuk "Art"
	$(".art-slider").slick({
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

	$(".description-slider").slick({
		variableWidth: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				},
			},
		],
	});
});

const prevBtnArt = document.getElementById("prev-btn-art");
const nextBtnArt = document.getElementById("next-btn-art");

// Menggeser slide ke kiri ketika tombol prev untuk "Art" diklik
prevBtnArt.addEventListener("click", function () {
	$(".art-slider").slick("slickPrev");
});

// Menggeser slide ke kanan ketika tombol next untuk "Art" diklik
nextBtnArt.addEventListener("click", function () {
	$(".art-slider").slick("slickNext");
});

const prevBtnDesc = document.getElementById("prev-btn-desc");
const nextBtnDesc = document.getElementById("next-btn-desc");

// Menggeser slide ke kiri ketika tombol prev untuk "Description" diklik
prevBtnDesc.addEventListener("click", function () {
	$(".description-slider").slick("slickPrev");
});

// Menggeser slide ke kanan ketika tombol next untuk "Description" diklik
nextBtnDesc.addEventListener("click", function () {
	$(".description-slider").slick("slickNext");
});

// Navbar scroll
// window.addEventListener("scroll", function () {
//     var navbar = document.getElementById("navbar");
//     if (window.scrollY > 0) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// });

AOS.init({
	disable: function () {
		var maxWidth = 800;
		return window.innerWidth < maxWidth;
	},
	duration: 1200,
	easing: "ease-in-out", // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom",
});

// logic copy clipboard

const copyButtonLabel = "Components";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
	// only add button if browser supports Clipboard API
	if (navigator.clipboard) {
		let button = document.createElement("button");

		button.innerText = copyButtonLabel;
		block.appendChild(button);

		button.addEventListener("click", async () => {
			await copyCode(block, button);
		});
	}
});

async function copyCode(block, button) {
	let code = block.querySelector("code");
	let text = code.innerText;

	await navigator.clipboard.writeText(text);

	// visual feedback that task is completed
	button.innerText = "Code Copied!";

	setTimeout(() => {
		button.innerText = copyButtonLabel;
	}, 700);
}

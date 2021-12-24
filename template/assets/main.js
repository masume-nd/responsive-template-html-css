const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
	nav.classList.toggle("nav-active");
	navLinks.forEach(
		(link, index) =>
			(link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`)
	);
	burger.classList.toggle("burger-active");
});
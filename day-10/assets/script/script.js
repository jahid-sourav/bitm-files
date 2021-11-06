// Sticky JS Starts Here
window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});
// Sticky JS Ends Here


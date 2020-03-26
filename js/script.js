//Change Nav style on scroll
window.onscroll = () => {
	const header = document.querySelector("#add-shadow");
	const nav = document.querySelector("#nav-bg")
	if (this.scrollY <= 40) {
		header.className = "";
		nav.className = "";
	} else {
		header.className = "add-shadow";
		nav.className = "nav-bg";
	}
}
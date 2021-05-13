function loved(object) {

	if (object.getAttribute("src") == "img/like.png") {
		object.setAttribute("src", "img/likefull.png")
        object.style.width = "76px";
        object.style.height = "76px";
        object.style.opacity = "0.1";
        setTimeout(() => { object.style.width = "24px";
                        object.style.height = "24px";
                        object.style.opacity = "1";}, 300)

	} else {
		object.setAttribute("src", "img/like.png")
	}
}
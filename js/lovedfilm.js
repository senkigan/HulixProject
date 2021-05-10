function loved(object) {

	if (object.getAttribute("src") == "img/like.png") {
		object.setAttribute("src", "img/likefull.png")
	} else {
		object.setAttribute("src", "img/like.png")
	}
}
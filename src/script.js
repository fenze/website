window.addEventListener("load", () => {
	setTimeout(() => {
		document.querySelector("#loader").remove()
	}, 400);
})

const search = () => {
	input = document.querySelector("#searchbar").value.toUpperCase()
	menu = document.querySelectorAll(".search-element")

	for (e of menu)
		if (e.innerHTML.toUpperCase().indexOf(input) == -1)
			e.style.display = "none"

		else e.style.display = ""
}

const hide_search = (delay) => {
	setTimeout(() => {
			document.querySelector("#menu").style.display = "none"
			document.querySelector(".menubtn").classList.remove("fa-xmark")
			document.querySelector(".menubtn").classList.add("fa-bars")
	}, delay);
}

const show_search = () => {
	document.querySelector("#menu").style.display = "block"
	document.querySelector("#searchbar").focus()
	document.querySelector(".menubtn").classList.remove("fa-bars")
	document.querySelector(".menubtn").classList.add("fa-xmark")
}

const toggle_search = () => {
	menu = document.querySelector("#menu")
	if (menu.style.display == "block")
		hide_search()
	else
		show_search()
}

window.addEventListener("keyup", e => {
		if (e.key === "/")
			show_search()

		if (e.keyCode === 27)
			hide_search()

		if (e.keyCode === 13)
			for (entry of document.querySelectorAll(".search-element"))
				if (entry.style.display != "none")
					window.open(entry.getAttribute("href"), name='_self')

})

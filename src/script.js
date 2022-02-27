window.addEventListener("load", () => {
	setTimeout(() => {
		document.querySelector("#loader").remove()
	}, 500);
})

const search = () => {
	input = document.querySelector("#search-menu").value.toUpperCase()
	menu = document.querySelectorAll(".search-element")

	for (entry of menu) {
		if (entry.innerHTML.toUpperCase().indexOf(input) == -1)
			entry.style.display = "none"
		else
			entry.style.display = "";
	}
}

const hide_search = () => {
			document.querySelector("#menu").style.display = "none"
}

const show_search = () => {
			document.querySelector("#menu").style.display = "block"
			document.querySelector("#search-menu").focus()
}

window.addEventListener("keyup", function(event) {
    if (event.key === "/")
			show_search()

		if (event.keyCode === 27 || event.ctrlKey && event.key === "c")
			hide_search()

		if (event.keyCode === 13) {
			menu = document.querySelectorAll(".search-element")
			for (entry of menu) {
				if (entry.style.display != "none")
					window.open(entry.getAttribute("href"))
			}
		}
})

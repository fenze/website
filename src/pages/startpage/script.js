const hide_search = () => {
			document.querySelector("#search").style.display = "none"
}

const show_search = () => {
			document.querySelector("#search").style.display = "block"
			document.querySelector("#searchbar").focus()
}

const search = () => {
	search_value = document.querySelector("#searchbar").value.replace(
		/\s/g, '+'
	)

	window.open(`https://duckduckgo.com/?q=${search_value}`)
}

window.addEventListener("keyup", event => {
    if (event.key === "/")
			show_search()

		if (event.keyCode === 27 || event.ctrlKey && event.key === "c")
			hide_search()

		if (event.keyCode === 13) {
			search()
		}
})

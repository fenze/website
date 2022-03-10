window.addEventListener("load", () => {
	document.body.insertAdjacentHTML('afterend','
		<div id="loader">fenze</div>
	')
	setTimeout(() => {
		document.querySelector("#loader").remove()
	}, 400);
})

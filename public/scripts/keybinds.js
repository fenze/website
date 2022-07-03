/*
 * keybinds.js
 * Copyright (C) 2022 fenze <contact@fenze.dev>
 *
 * Distributed under terms of the MIT license.
 */

(() => {

	/**
	 * Body shortcuts
	 * j, k - Arrow{Down | Up}
	 * Slash, ESC - toggle fullscreen navigation
	 */
	$('body').keyup(key => {
		if (key.code == "KeyJ")
			window.scrollBy(0, 200)

		if (key.code == "KeyK")
			window.scrollBy(0, -200)

		if (key.code == "Slash"
			 | key.code == "Escape")
			toggle_nav()
	})


	/**
	 * Navigation shortcuts
	 * Down/Up Arrows
	 * Slash, ESC - toggle fullscreen navigation
	 */
	$('nav').keyup(key => {
		let list = $('#entries > a').filter(':visible')

		if (key.code == "ArrowDown") {
			if (i++ == list.lenght) return
			console.log(list.length)
			console.log(i)

			list[i].focus()
			return
		}

		if (key.code == "ArrowUp") {
			if (i == -1)
				i = 0
			if (i > 0)
				i--

			list[i].focus()
			return
		}

		if (key.code == "Enter") {
			let done = true

			for (entry of $('.search-element').filter(':visible')) {
				if (entry == document.activeElement) {
					menu.click()
					window.open(entry.getAttribute('href'), target='_self')
				} else {
					done = false
				}
			}

			if (!done) {
				first = $('.search-element').filter(':visible')[0]
				menu.click()
				window.open(first.getAttribute('href'), target='_self')
			}

			return
		}

		if (document.activeElement != search)
			search.focus()

		let input = $('input').val()

		for (entry of $('.search-element')) {
			let text = entry.textContent.trim().toLowerCase()

			if (match(input, text))
				entry.style = 'display: flex'
			else
				entry.style = 'display: none'
		}
	})

})()

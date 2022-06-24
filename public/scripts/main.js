/*
 * main.js
 * Copyright (C) 2022 fenze <contact@fenze.dev>
 *
 * Distributed under terms of the MIT license.
 */

const toggle_nav = () => {
	let burger = $('#burger'),
			menu = $("#menu"),
			menu_parent = menu.parent()
			search = $('#search > input'),
			nav = $('nav')

	menu_parent.css('transition', '0ms')

	if (nav.css('display') == 'none') {
		menu.parent().css('background', 'none')
		burger.addClass('nav-close')
		nav.css('display', 'flex')
		menu.css('opacity', '0')
		document.body.style.overflow = 'hidden'
		i = -1
		search.val('').focus()
		search.keyup()
		return
	}

	document.body.style = ''
	menu.parent().css('background', '')
	menu_parent.css('transition', '')
	menu.css('opacity', '')
	burger.removeClass('nav-close')
	nav.hide()
}

$(document).scroll(() => {
	let windowheight = window.innerHeight

	for (reveal of $('.reveal')) {
		let revealtop = reveal.getBoundingClientRect().top

		if (revealtop < windowheight) {
			reveal.classList.add('active')
		} else {
			reveal.classList.remove('active')
		}
	}

	const sections = ['home', 'offer', 'about']
	for (section of $('section')) {
		let revealtop = section.getBoundingClientRect().top

		if (revealtop < windowheight - 600) {
			for (s of sections) {
				$(`#nav-${s}`).css('opacity', '')
			}
			if (sections.indexOf(section.id) >= 0)
				$(`#nav-${section.id}`).css('opacity', '1')
		}
	}
})

/*
 * main.js
 * Copyright (C) 2022 fenze <contact@fenze.dev>
 *
 * Distributed under terms of the MIT license.
 */

const toggle_nav = () => {
	let burger = $('#burger'),
			menu = $("#menu"),
			menu_parent = $("#nav-btn-parent"),
			search = $('#search > input'),
			nav = $('nav')

	menu_parent.css('transition', '0ms !important')

	if (nav.css('display') == 'none') {
		burger.addClass('nav-close')
		nav.css('display', 'flex')
		nav.css('left', '0')
		document.body.style.overflow = 'hidden'
		i = -1
		search.val('').focus()
		search.keyup()
		return
	}

	document.body.style = ''
	burger.addClass('nav-close')
	menu_parent.css('back-drop', '')
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

	const sections = ['home', 'portfolio']
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

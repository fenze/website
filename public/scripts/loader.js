const menu_parent = $('#nav-btn-parent')
const menu_parent_div = $('#nav-btn-parent > #menu')
const nav = $('nav')
const sections = ['home', 'offer', 'about']
const search = $('#search > input')
const menu_entries  = $('.search-element')
const mode = $('#theme-btn')
const menu = $('#nav-btn')

const key = {
	RETURN: 13,
	DOWN: 40,
	UP: 38,
	SLASH: 191,
	ESC: 27
}

var theme = 'light'
var body = $('body')
var logo = $('#logo')

const dark = () => {
	mode.removeClass('fa-moon')
	mode.addClass('fa-sun')
	body.addClass('dark')
	menu.css('background', '#fff')
	logo.attr('src', 'images/logo-nobg.png')
	theme = 'dark'
}

const light = () => {
	$('.loader').css('background', '#fff')
	mode.removeClass('fa-sun')
	mode.addClass('fa-moon')
	body.removeClass('dark')
	menu.css('background', '#000')
	logo.attr('src', 'images/logo-nobg-black.png')
	theme = 'light'
}

// Set the default theme based on the user's prefferd color scheme.
theme = window.matchMedia('(prefers-color-scheme: dark)').matches
	? 'dark' : 'light'
// theme = 'dark'
theme === 'dark' ? dark() : light()

// Set a loading animation ('Fenze Agency' being typed)
$(setTimeout(() => $('.loader').remove(), 700))

// Fuzzy match `str` against the `against` str. This version
// of fuzzy finding will eat up each character from `str`,
// which has to be found in `against`.
const fuzzy_match = (str, against) => {
	str = str.replaceAll(' ', '')
	against = against.replaceAll(' ', '')
	for (c of str) {
		let index = against.indexOf(c)
		if (index == -1)
			return false
		against = against.substr(index)
	}
	return true
}

// Change theme button
mode.click(() => {
	theme == 'dark' ? light() : dark()
})

// Make the burger background clickable
$('#click').click(() => {
	menu_parent.css('transition', '0ms')
	if (nav.css('display') == 'none') {
		menu_parent.css('background', 'none')
		menu_parent_div.css('opacity', '0')
		menu.addClass('nav-close')
		document.body.style.overflow = 'hidden';
		nav.css('display', 'flex')
		search.val('').focus()
		search.keyup()
		i = -1
	} else {
		menu_parent.css('background', '')

		if (theme == 'dark') {
			menu.css('background', '#fff')
		} else {
			menu.css('background', '#000')
		}
		menu_parent_div.css('opacity', '1')
		document.body.style.overflow = '';
		menu.removeClass('nav-close')
		nav.hide()
	}
	menu_parent.css('transition', '')
})

$(document).scroll(() => {
	for (reveal of $('.reveal')) {
		let windowheight = window.innerHeight
		let revealtop = reveal.getBoundingClientRect().top

		if (revealtop < windowheight) {
			reveal.classList.add('active')
		} else {
			reveal.classList.remove('active')
		}
	}

	for (reveal of $('section')) {
		let windowheight = window.innerHeight
		let revealtop = reveal.getBoundingClientRect().top

		if (revealtop < windowheight - 600) {
			for (s of sections) {
				$(`#nav-${s}`).css('text-decoration', 'none')
			}
			if (sections.indexOf(reveal.id) >= 0)
				$(`#nav-${reveal.id}`).css('text-decoration', 'underline 2px')
		}
	}
})

// Global shortcuts
$('body').on('keyup', e => {
	if (e.keyCode == key.ESC || e.keyCode == key.SLASH)
		menu.click()
})

// Navigation shortcuts
$('nav').on('keyup', e => {
	// List of all buttons in navigation filtered to only visible
	list = $('#entries > a').filter(':visible')

	// Focus next element
	if (e.keyCode == key.DOWN) {
		if (i != list.length - 1)
			i++
		list[i].focus()
		return
	}

	// Focus prev element
	if  (e.keyCode == key.UP) {
		if (i == -1)
			i = 0
		if (i > 0)
			i--
		list[i].focus()
		return
	}

	// Opens focused element and if none are selected, pick first from visible
	if (e.keyCode == key.RETURN) {
		done = true
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

	let input = search.val()

	// If output is null, restores all elements to visible
	for (e of menu_entries) {
		let elem = e.textContent.trim().toLowerCase()
		if (fuzzy_match(input, elem))
			e.style.display = 'flex'
		else
			e.style.display = 'none'
	}
})

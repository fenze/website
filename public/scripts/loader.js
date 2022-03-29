$(setTimeout(() => $('.loader').remove(), 700))

menu = $('#nav-btn')
nav = $('nav')

$('#nav-btn-parent').click(() => {
  if (nav.css('display') == "none") {
    menu.css('background', '#FEC8A7')
    menu.addClass('nav-close')
    nav.css('display', 'flex')
    $('#search > input').val('').focus()
		$('#search > input').keyup()
  } else {
    menu.css('background', '#CBC7FC')
    menu.removeClass('nav-close')
    nav.hide()
  }
})

$('body').on('keyup', e => {
  if (e.keyCode == 27 || e.keyCode == 191)
    menu.click()

  if (e.keyCode == 13)
      for (entry of $('.search-element'))
        if (entry.style.display != 'none') {
          menu.click()
          window.open(entry.getAttribute('href'), name='_self')
        }
})

$('#search > input').on("keyup", () => {
  input = $('#search > input').val().toUpperCase()

  for (e of $('.search-element'))
    if (e.innerHTML.toUpperCase().indexOf(input) == -1)
      e.style.display = 'none'
    else
      e.style.display = 'flex'
})

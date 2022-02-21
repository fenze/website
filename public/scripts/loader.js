$(setTimeout(() => {
  $('.loader').remove()
  document.body.style.overflow = 'visible'
}, 400))

const search = () => {
  input = document.querySelector('#search > input').value.toUpperCase()
  menu = document.querySelectorAll('.search-element')

  for (element of menu)
    if (element.innerHTML.toUpperCase().indexOf(input) == -1) {
      element.style.display = 'none'
    }
    else {
      element.style.display = 'flex'
    }
}

mbtn = $('#menu')
nav = $('nav')
mbtn.click(() => {
  if (nav.css('display') == "none") {
    mbtn.removeClass('fa-bars')
    mbtn.addClass('fa-xmark')
    mbtn.css('color', '#FEC8A7')
    nav.css('display', 'flex')
    document.body.style.overflow = 'hidden'
    input=$('#search > input').val('')
    input.focus()
    search()
  } else {
    mbtn.removeClass('fa-xmark')
    mbtn.addClass('fa-bars')
    document.body.style.overflow = 'visible'
    mbtn.css('color', '#CBC7FC')
    nav.hide()
  }
})

$(document).on('keyup', e => {
  if (e.keyCode === 27 || e.keyCode === 191)
    mbtn.click()

  if (e.keyCode === 13)
      for (entry of document.querySelectorAll('.search-element'))
        if (entry.style.display != 'none') {
          mbtn.click()
          window.open(entry.getAttribute('href'), name='_self')
        }
})

$('#search > input').on("keyup", () => search())

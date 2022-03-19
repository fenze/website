$(setTimeout(() => $(".loader").remove(), 400))

mbtn = $(".m-btn")
nav = $("nav")
mbtn.click(() => {
  if (nav.css("display") == "none") {
    mbtn.removeClass("fa-bars")
    mbtn.addClass("fa-xmark")
    nav.css('display', 'flex')
    $("#box > input").focus()
  } else {
    mbtn.removeClass("fa-xmark")
    mbtn.addClass("fa-bars")
    nav.hide()
  }
})

$(document).on("keyup", e => {
  if (e.keyCode === 27 || e.keyCode === 191)
    mbtn.click()

  if (e.keyCode === 13)
      for (entry of document.querySelectorAll(".search-element"))
        if (entry.style.display != "none")
          window.open(entry.getAttribute("href"), name='_self')
})

$("#box > input").on("keyup", e => {
  input = document.querySelector("#box > input").value.toUpperCase()
  menu = document.querySelectorAll(".search-element")

  for (element of menu)
    if (element.innerHTML.toUpperCase().indexOf(input) == -1) {
      element.style.display = "none"
    }
    else {
      element.style.display = "flex"
    }
})

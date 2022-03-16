$(setTimeout(() => $(".loader").remove(), 400))

mbtn = $(".m-btn")
nav = $("nav")
mbtn.click(() => {
  if (nav.css("display") == "none") {
    mbtn.removeClass("fa-bars")
    mbtn.addClass("fa-xmark")
    nav.show()
    nav.css("display: flex")
    $("#box > input").focus()
  } else {
    mbtn.removeClass("fa-xmark")
    mbtn.addClass("fa-bars")
    nav.hide()
  }
})

$(document).on("keyup", e => {
  console.log(e.keyCode)
  if (e.keyCode === 27 || e.keyCode === 191)
    mbtn.click()
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

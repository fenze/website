$(setTimeout(() => $(".loader").remove(), 400))

mbtn = $(".m-btn")
nav = $("nav")
mbtn.click(() => {
  if (nav.css("display") == "none") {
    mbtn.removeClass("fa-bars")
    mbtn.addClass("fa-xmark")
    nav.show()
    nav.css("display: flex")
    $("nav > input").focus()
  } else {
    mbtn.removeClass("fa-xmark")
    mbtn.addClass("fa-bars")
    nav.hide()
  }
})

$(document).on("keyup", e => {
  if (e.keyCode === 27 || e.keyCode === 191)
    mbtn.click()
})

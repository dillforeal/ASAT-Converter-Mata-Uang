const btnShow = $('#show')
const btnHide = $('#hide')
const btnFadeIn = $('#fadeIn')
const btnFadeOut = $('#fadeOut')
const btnToggle = $('#toggle')

const div = $("div")

btnShow.click(function(){
   div.show()
})

btnHide.click(function(){
    div.hide()
})

btnFadeIn.click(function(){
    div.fadeIn("slow")
})

btnFadeOut.click(function(){
    div.fadeOut("slow")
})

btnToggle.click(function(){
    div.toggle()
})

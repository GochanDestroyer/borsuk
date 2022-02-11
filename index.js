let checkbox = document.getElementById("zaznaczone")
let a = document.getElementsByClassName("link_menu")
let div = document.getElementById("div_js")
let img = document.getElementsByClassName("helikopterv2")

for(i = 0; i < a.length; i++){
    a[i].addEventListener("click",()=>{
        checkbox.checked=false
    })
}

window.addEventListener("resize",()=>{
    if(window.innerWidth <= 1425){
        heightValue = img[0].offsetHeight
        div.style.height = heightValue + "px"
    }
})

if(window.innerWidth <= 1425){
    window.onload = function(){
        heightValue = img[0].offsetHeight
        div.style.height = heightValue + "px"
    }
}
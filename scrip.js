
// Slider---------------------------------------------------------
let index= 0
const rightbtn = document.querySelector('.fa-angle-right')
const lefttbtn = document.querySelector('.fa-angle-left')
const imgNuber = document.querySelectorAll('.Slider-content-left-top img')
rightbtn.addEventListener ("click", function(){
      index = index+1
      if(index>imgNuber.length-1){
            index=0
      }
      document.querySelector(".Slider-content-left-top").style.right =index*100+"%"
})
lefttbtn.addEventListener ("click", function(){
      index=index-1
      if(index<=0){
            index=imgNuber.length-1
      }
      document.querySelector(".Slider-content-left-top").style.right = index*100+"%"
})
//Slider 1----------------------------------------
const imgNuberLi = document.querySelectorAll('.Slider-content-left-bottom li')
let imgactive = document.querySelector('.active')
imgNuberLi.forEach(function(image,index){
      image.addEventListener("click",function(){
            removeactive()
           document.querySelector(".Slider-content-left-top").style.right = index *100+"%"
       
           image.classList.add("active")
      })
})
function removeactive (){
      let imgactive = document.querySelector('.active')
      imgactive.classList.remove("active")
}
//Slider2---------------------------------------------------
function imgAuto (){
      index = index+1
      if(index>imgNuber.length-1){
            index=0
      }
      removeactive()
      document.querySelector(".Slider-content-left-top").style.right = index *100+"%"
      imgNuberLi[index].classList.add("active")
}
setInterval(imgAuto,3000)
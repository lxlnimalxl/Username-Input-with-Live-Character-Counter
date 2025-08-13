let inputElement = document.querySelector('.inputClass')
let counterElement = document.querySelector('.counter')

inputElement.addEventListener('keyup' , function(){
    counterElement.textContent = 19 - inputElement.value.length
    console.log()
})
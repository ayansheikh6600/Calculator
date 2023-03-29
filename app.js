function setNumber(num) {
    var input = document.getElementById("input")
    input.value += num
}
function ans() {
    var inputValue = document.getElementById("input")
    var output = eval(inputValue.value)
    inputValue.value = output
}
function allclear(){
    var input = document.getElementById("input")
    input.value = ""
}
function clear(){
    
console.log("input")
    // input += input.slice(0,-1) 

}
function setNumber(num) {
    var input = document.getElementById("number")
    input.value += num
}
function ans() {
    var inputValue = document.getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}
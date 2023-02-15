function textChange() {
    const DefaultTextId = document.getElementById("default-text")
    DefaultTextId.innerText = "hello pagla"

}



document.getElementById("btn-update").addEventListener("click", function () {
    const inputField = document.getElementById("input-field")
    const inputText = inputField.value;
    const textDisplay = document.getElementById("input-text-disply")
    textDisplay.innerText = inputText;
})


document.getElementById('btn-email-submit').addEventListener('click', function () {
    const inputField = document.getElementById('input-email')
    const getInputText = inputField.value;
    console.log(getInputText)
    const getSetAria = document.getElementById('set-email')
    getSetAria.innerText = getInputText;


})
function getInputValueByID(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldValue = parseFloat(inputField.value)
    inputField.value = ""
    return inputFieldValue;
}


function getElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const value = parseFloat(element.innerText)
    return value;
}

function setTextElementValueByID(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue;
}
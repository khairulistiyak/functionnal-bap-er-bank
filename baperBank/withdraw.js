// function withdraw() {
//     const withdrawField = document.getElementById("withdraw-field")
//     console.log(withdrawField.innerText)
// }


document.getElementById('btn-withdraw').addEventListener("click", function () {
    // user withdraw input 
    const withdrawInputField = document.getElementById("withdraw-field")
    const withdrawAmountInput = parseFloat(withdrawInputField.value)
    console.log(withdrawAmountInput)
    // console.log(withdrawAmount)
    // withdraw Field

    if (isNaN(withdrawAmountInput)) {
        alert("pleas valid number")
        return;
    }


    // total amount 
    const getTotalAmount = document.getElementById("total-balance")
    const totalAmount = parseFloat(getTotalAmount.innerText)

    withdrawInputField.value = "";
    if (withdrawAmountInput > totalAmount) {
        alert("baper bank a ato tk nai")
        return;
    }

    getTotalAmount.innerText = totalAmount - withdrawAmountInput;
    const withdrawElement = document.getElementById("withdraw-amount");
    const withdrawAmount = parseFloat(withdrawElement.innerText)
    withdrawElement.innerText = withdrawAmount + withdrawAmountInput



})
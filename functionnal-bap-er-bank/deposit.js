document.getElementById("btn-deposit").addEventListener("click", function () {
    // user input id 
    const depositUserInput = getInputValueByID("deposit-field")

    // condition 
    if (isNaN(depositUserInput)) {
        alert("pleas valid amount")
        return
    }

    // element id 
    const depositElement = getElementValueById("deposit-amount")
    const totalElement = getElementValueById("total-balance")

    // set deposit amount 
    const deposit = depositUserInput + depositElement;
    setTextElementValueByID("deposit-amount", deposit)

    // set total amount 
    const totalBalance = depositUserInput + totalElement;
    setTextElementValueByID("total-balance", totalBalance)
})




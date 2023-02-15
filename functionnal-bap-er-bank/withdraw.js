document.getElementById("btn-withdraw").addEventListener("click", function () {
    // get user input 
    const withdrawUserInput = getInputValueByID('withdraw-field')

    if (isNaN(withdrawUserInput)) {
        alert("pleas valid amount")
        return
    }
    // get balance  element
    const withdrawElement = getElementValueById("withdraw-amount")
    const totalBalanceElement = getElementValueById("total-balance")




    // condition 
    if (withdrawUserInput > totalBalanceElement) {
        alert("tak nai")
        return
    }

    // calculation  
    const newWithdraw = withdrawUserInput + withdrawElement;
    const totalBalance = totalBalanceElement - withdrawUserInput;

    // set amount 

    setTextElementValueByID("withdraw-amount", newWithdraw)
    setTextElementValueByID("total-balance", totalBalance)


})
document.getElementById("btn-deposit").addEventListener("click", function () {

    // get user amount 
    const depositField = document.getElementById("deposit-field")
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseInt(newDepositAmountString)

    if (isNaN(newDepositAmount)) {
        alert("please valid amount")
        return;
    }


    // get Deposit amount 
    const depositElement = document.getElementById("deposit-amount")
    const previousDeposit = parseInt(depositElement.innerText)
    depositElement.innerText = previousDeposit + newDepositAmount;
    depositField.value = ""

    // // Balance
    const totalBalance = document.getElementById("total-balance")
    const balance = parseInt(totalBalance.innerText)
    totalBalance.innerText = newDepositAmount + balance;


})



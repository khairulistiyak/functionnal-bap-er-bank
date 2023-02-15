document.getElementById("btn-submit").addEventListener("click", function () {
    const inputEmail = document.getElementById("email")
    const email = inputEmail.value;
    const inputPassword = document.getElementById("password")
    const password = inputPassword.value;

    if (email === "abba@tk.dew" && password === "abbatkdew") {
        document.location.href = "bank.html"
    }
    else {
        alert("baper bank er password vhul hoiche...!!")
    }

})
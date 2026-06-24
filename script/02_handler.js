console.log("Handler Connected.")

document.getElementById("btn-update-title")
    .addEventListener("click", function () {
        const titleElement = document.getElementById("title-text");
        titleElement.innerText = "Title Updated."
    })



document.getElementById("btn-login")
    .addEventListener("click", function () {
        const userInfo = document.getElementById("user-info");
        userInfo.innerText = "Login successfully"
    })




// 1. Set eventListener
document.getElementById("btn-update")
    .addEventListener("click", function () {
        // 2. get the text from the input
        const nameInput = document.getElementById("input-name");
        // console.log(nameInput)
        const name = nameInput.value;

        // 3. Set the name
        const nameP = document.getElementById('name');
        nameP.innerText = name;
    })





document.getElementById("email-add-btn")
    .addEventListener("click", function () {

        const emailText = document.getElementById("email-text");
        // not work:innerText   work:value
        const email = emailText.value;

        const emailP = document.getElementById("email-name");
        emailP.innerText = email;
    })


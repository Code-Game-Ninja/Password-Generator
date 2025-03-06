const generateBtn = document.querySelector("button");
const passwordBox = document.querySelector(".password_box");
const passwordDisplay = document.querySelector(".password_appear");
function getRandomPassword() {
    const lowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    const uppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    const special = "!@#$%^&*()_+{}[]<>?".charAt(Math.floor(Math.random() * 15));

    let password = lowercase + uppercase + number + special;
    const allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?";
    while (password.length < 8) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    passwordDisplay.textContent = password;

    passwordBox.classList.add("change-color");

    setTimeout(() => {
        passwordBox.classList.remove("change-color");
    }, 800);
}

generateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    getRandomPassword();
});

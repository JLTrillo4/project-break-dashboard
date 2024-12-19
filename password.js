function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
}

document.getElementById("generate").addEventListener("click", () => {
    const length = document.getElementById("length").value;
    const password = generatePassword(length);
    document.getElementById("password").value = password;
});

document.getElementById("copy").addEventListener("click", copyToClipboard);
let username = prompt("nhap ten");
if (username === "ADMIN") {
    let Password = prompt("nhap mat khau:");
    if (Password === "TheMaster") {
        alert("Welcome");
    } else if (Password === !null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if(username=== !null) {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}
let username = prompt("nhap ten");
if (username === "ADMIN") {
    let Password = prompt("nhap mat khau:");
    if (Password === "TheMaster") {
        alert("Welcome");
    } else if (Password === "") {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if(username=== "") {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}
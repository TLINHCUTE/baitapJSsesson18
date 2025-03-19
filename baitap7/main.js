let a = Number(prompt("nhap a:"));
let b = Number(prompt("nhap b:"));
let sum = a + b;
let minus = a - b;
let core = a * b;
let divide = a / b;
let operation = prompt("chon:(+,-,*,/)");
switch (operation){
    case "+":
        alert(sum);
        break;
    case "-":
        alert(minus);
        break;
    case "*":
        alert(core);
        break;
    case "/":
        alert(divide);
        break;
    default :
        alert("Vui lòng chọn phép tính");
}
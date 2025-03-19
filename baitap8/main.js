let a = Number(prompt("moi nhap canh a:"));
let b = Number(prompt("moi nhap canh b:"));
let c = Number(prompt("moi nhap canh c:"));
if ((a + b > c) || (a + c > b) || (c + b > a)) {
    alert("day la tam giac thuong");
}
if ((a === b) || (b === c) || (c === a)) {
    alert("day la tam giac can")
} else if ((a === b) && (b === c) && (c === a)) {
    alert("day la tam giac deu");
} else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == b * b + a * a)) {
    alert("day la tam giac vuong");
} else {
    alert("khong tao duoc tam giac");
}
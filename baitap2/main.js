let math=Number(prompt("nhap diem toan:"));
let Literature=Number(prompt("nhap diem van:"));
let english=Number(prompt("nhap diem tanh:"));
let average=(math+Literature+english)/3;
if(average>=8){
    document.writeln("gioi");
} else if(7.9>= average && average>= 6.5) {
    document.writeln("kha");
} else if(6.4>= average && average>= 5){
    document.writeln("trung binh");
} else{
    document.writeln("yeu");
}
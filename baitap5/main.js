let YearsOfExperience = Number(prompt("Nhập năm kinh nghiệm của bạn:"));
if (YearsOfExperience < 1) {
    alert("Mới vào nghề");
} else if(YearsOfExperience < 4 && YearsOfExperience >=1 ) {
    alert("Nhân viên có kinh nghiệm");
} else if(YearsOfExperience >= 4 && YearsOfExperience <=6 ) {
    alert("Chuyên viên");
} else if(YearsOfExperience > 6) {
    alert("Quản lý");
}

let year = prompt('nhap nam');
    if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
        alert(year + ' la nam nhuan');
    } else {
        alert(year + ' la nam khong nhuan');
    }

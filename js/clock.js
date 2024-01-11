function saatfunction() {
    let text;
    let person = prompt("Lütfen isminizi girer misiniz:");
    if (person == null || person == "") {
        alert("Lütfen bir isim giriniz");
    } else {
        text = person;
    }
    document.getElementById("isim").innerHTML = text;    
}

function showTime() {
    let date = new Date();
    let saat = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    let gun = date.getDay();

    switch (gun) {
        case 0:    gun = "Pazar";
            break;
        case 1:    gun = "Pazartesi";
            break;
        case 2:    gun = "Salı";
            break;
        case 3:    gun = "Çarşamba";
            break;
        case 4:    gun = "Perşembe";
            break;
        case 5:    gun = "Cuma";
            break;
        case 6:    gun = "Cumartesi";
            break;
        default:
            break;
    }
    
    document.getElementById("myClock").innerHTML = saat + " " + gun;
}

setInterval(showTime, 1000);

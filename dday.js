/*var inputStartDay = prompt("사귄날짜를 입력해주세요", "0000-00-00");

var today = new Date();

var todaytMilli = startDay.getTime();
document.querySelector("#today").innerHTML = "<h3>" + passedDay + "일 지남</h3>";

function calcDaate(number) {
    var futureMilli = startMilli + (calcDay * number);
    var dDay = Math.round((futureMilli - todaytMilli)/ calcDay);
    if(number == 365) {
        year = startDay.getFullYear() + 1;
        month = startDay.getMonth() + 1;
        day = startDay.getDate();
    }else{
        var futureDate = new Date(futureMilli);
        year = futureDate.getFullYear();
        month = futureDate.getMonth() +1;
        day = futureDate.getDate();
    }
    console.log(number);
    document.querySelector("#dday" + number),innerHTML = dDay + "일 남음<br>" + year + "년" + month + "월"
}*/
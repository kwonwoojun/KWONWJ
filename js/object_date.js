// object_date.js
document.getElementById('result').innerHTML = new Date(2020, 10, 10, 10, 15, 22);

let showBtn = document.getElementById('showBtn');
showBtn.onclick = function () {
    let year = document.querySelector('input[name="year"]').value;
    let month = document.querySelector("input[name='month']").value;
    let day = document.querySelector("input[name='day']").value;
    console.log(year, month, day);
    let today = new Date(year, month, 0);
    console.log(today.getDay());
    console.log(today.getDate());
    document.getElementById('result').innerHTML = today;

    // 달력만들기
    // 해당월의 전체일수: totalDay
    // 해당월의 1일의 요일정보: firstDay
    let totalDay = 31;
    let firstDay = 5;
    let calTag = '<table border="1">';
   
    calTag += '<tr><td/><td/><td/>';
    for (let i = 0; i < totalDay; i++) {
        calTag += '<td>' + (i + 1) + '</td>';
        if ((i - 1 + firstDay) % 7== 0) {
            calTag += '</tr><tr>';
        }
    }
    calTag += '</tr></table>';
    document.getElementById('result').innerHTML = calTag;
}




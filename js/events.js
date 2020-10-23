// events.js

//전구 ON/OFF


let buttons = document.querySelectorAll('#new>button');
console.log(buttons);

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = clickFunc;
    buttons[i].onmouseover = function() {
        buttons[i].style.background = 'yellow';
        buttons[i].style.color = 'red';
    }
    buttons[i].onmouseout = function() {
        buttons[i].style.background = '';
        buttons[i].style.color = '';
    }
};

function clickFunc() {
    alert(this.innerHTML);
}



let onBtn = document.getElementById('turnOn');
onBtn.onclick = function() {
    let img = document.querySelector('#show>img');
    img.setAttribute('src', 'images/on.gif');
}
console.log(onBtn);

onBtn.onmouseover = function () {
    onBtn.style.background = 'yellow';
    onBtn.style.color = 'red';
}
onBtn.onmouseout = function () {
    onBtn.style.background = '';
    onBtn.style.color = '';
}


let offBtn = document.getElementById('turnOff');
offBtn.onclick = function() {
    let img = document.querySelector('#show>img');
    img.setAttribute('src', 'images/off.gif');
}

offBtn.onmouseover = function () {
    offBtn.style.background = 'yellow';
    offBtn.style.color = 'red';
}
offBtn.onmouseout = function () {
    offBtn.style.background = '';
    offBtn.style.color = '';
}
//mitiply.js
let show = document.getElementById('show');
for (let j = 1; j <= 9; j++) {
    for (let i = 2; i <= 5; i++) {
        // document.write('<div>' + i + ' * ' + j +' = ' + (j*i) + '<br>' + '</div>');
        let div = document.createElement('div');
        div.innerHTML = i + ' * ' + j +' = ' + (j*i);
        show.append(div);
    }
    // document.write("<div class='row'></div>");
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.innerHTML = '<br>'
    show.append(row);
}

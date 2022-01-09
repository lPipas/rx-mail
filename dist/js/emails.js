//COPIA EL TEXTO DE LOS MAILS.HTML
let emails = document.querySelectorAll("tr td:nth-child(2)");
for (let i = 0; i < emails.length; i++) {
    emails[i].addEventListener("click", () => { copiarTexto(i) });
}
copiarTexto = function(i) {
    navigator.clipboard.writeText(emails[i].innerHTML);
    emails[i].style.backgroundColor = "rgb(12, 34, 32)";
    emails[i].style.color = "rgb(234, 251, 251)";
    setTimeout(() => {
        emails[i].style.backgroundColor = "rgb(234, 251, 251)";
        emails[i].style.color = "rgb(22, 63, 61)";
        emails[i].style.backgroundColor = "";
    }, 1000);
}

//FILTRO
document.querySelector("#buscar").onkeyup = function () {
    $TableFilter(".table", this.value);
}
$TableFilter = function (id, value) {
    console.log(value);
    console.log(id)
    var rows = document.querySelectorAll(id + ' tbody tr');
    console.log(rows);
    for (var i = 0; i < rows.length; i++) {
        var showRow = false;

        var row = rows[i];
        row.style.display = 'none';

        for (var x = 0; x < row.childElementCount; x++) {
            if (row.children[x].textContent.toLowerCase().indexOf(value.toLowerCase().trim()) > -1) {
                showRow = true;
                break;
            }
        }

        if (showRow) {
            row.style.display = null;
        }
    }
}

// document.querySelector('body').onkeyup = function (e) {
//     if(e.keyCode === 13){
//         copiarTexto(0);
//     }
// }
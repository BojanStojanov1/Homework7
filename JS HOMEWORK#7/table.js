function generateTable() {
  let rows = document.getElementById("rows").value;
  let cols = document.getElementById("cols").value;

let tableHTML = "<table>";

for (let i = 1; i <= rows; i++) {
    tableHTML += "<tr>"; 

    for (let j = 1; j <= cols; j++) {
        tableHTML += `<td></td>`;
    }

    tableHTML += "</tr>"; 
}

tableHTML += "</table>";  

document.getElementById("table-container").innerHTML = tableHTML;
}
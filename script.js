
var table = document.getElementById("myTable");
var tbody = document.getElementsByTagName("tbody")
let addBtn = document.getElementById("addBtn");

function addNote(){
    let title = prompt("Enter the title")
    let desc = prompt("Enter the description")
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = title;
    cell2.innerHTML = desc;

    localStorage.setItem(title,desc)
    tbody.appendChild(row)
    
}




for (let [a, b] of Object.entries(localStorage)) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    cell1.innerHTML = a
    cell2.innerHTML = b

  }
  
  
  
  function delNote(){
      let title = prompt("Enter the title")
      localStorage.removeItem(title)
      location.reload();
}

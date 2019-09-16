function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, occurrence;

  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
 for (i = 0; i < tr.length; i++) {
     occurrence = false; // Only reset to false once per row.
     td = tr[i].getElementsByTagName("td");
     for(var j=0; j< td.length; j++){                
         currentTd = td[j];
         if (currentTd ) {
             if (currentTd.innerHTML.toUpperCase().indexOf(filter) > -1) {
                 tr[i].style.display = "";
                 occurrence = true;
             } 
         }
     }
     if(!occurrence){
         tr[i].style.display = "none";
     } 
 }
}

// alt 
function filterTable(event) {
  var filter = event.target.value.toUpperCase();
  var rows = document.querySelector("#myTable tbody").rows;
  
  for (var i = 0; i < rows.length; i++) {
      var firstCol = rows[i].cells[0].textContent.toUpperCase();
      var secondCol = rows[i].cells[1].textContent.toUpperCase();
      if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
          rows[i].style.display = "";
      } else {
          rows[i].style.display = "none";
      }      
  }
}

document.querySelector('#myInput').addEventListener('keyup', filterTable, false);
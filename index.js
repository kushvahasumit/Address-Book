
var selectedRow = null;

// for form submition 
function onFormSubmit(){
    var formData = getFormData();
    if(selectedRow == null){
     insertNewRecord(formData)    
    }
    else{
        updateTable(formData)
    }
   resetData()
    
}

// getting available form data
function getFormData(){
    var formData = {};

    formData['fullName'] = document.getElementById('fullName').value;
    formData['address'] = document.getElementById('address').value;
    formData['phone'] = document.getElementById('phone').value;
    formData['email'] = document.getElementById('email').value;

    return formData;
}


// insert data in table 
function insertNewRecord(data){
    var table = document.getElementById('table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<div style="display: flex;gap: 20px;" id="action0">
    <button onclick="editEntry(this)">
      <i class="material-symbols-outlined">
        <span class="material-symbols-outlined"> edit_square </span>
      </i>
    </button>
    <button onclick="deleteEntry(this)">
      <i class="material-symbols-outlined">delete</i>
    </button>`;
     

}


// edit the present data 
function editEntry(td){
selectedRow = td.parentElement.parentElement.parentElement;
document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
document.getElementById('address').value = selectedRow.cells[1].innerHTML;
document.getElementById('phone').value = selectedRow.cells[2].innerHTML;
document.getElementById('email').value = selectedRow.cells[3].innerHTML;

}


// update current data
function updateTable(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.address;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.email;

}

// delete the whole row 
function deleteEntry(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex)
    }

    resetData()

}

// reseting data
function resetData(){
    document.getElementById('fullName').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    selectedRow = null;

}



// search data from the table 
function searchTable() {
    const filter = document.getElementById("search").value.toUpperCase();
    const table = document.getElementById("table");
    const tr = table.getElementsByTagName("tr");

    for(let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td");
        let match = false;

        for(let j = 0; j < td.length; j++) {
            const cellvalue = td[j].textContent.toUpperCase();

            if(cellvalue.includes(filter)) {
                match = true;
                break;
            }
        }
        tr[i].style.display = match ? "" : "none"
    }
}
document.getElementById("search").addEventListener("input", searchTable);
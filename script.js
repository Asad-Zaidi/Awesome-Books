window.onload = function () {
    var storedData = JSON.parse(localStorage.getItem("bookData")) || [];
    var tableBody = document.getElementById("tableBody");

    storedData.forEach(function (data) {
        addRowToTable(data.name, data.author);
    });
};

function addRowToTable(name, author) {
    var tableBody = document.getElementById("tableBody");
    var newRow = tableBody.insertRow();

    var nameCell = newRow.insertCell();
    var authorCell = newRow.insertCell();
    var actionCell = newRow.insertCell();

    nameCell.innerHTML = name;
    authorCell.innerHTML = author;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
        deleteRow(newRow);
    };

    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "edit";
    editButton.onclick = function () {
        editRow(newRow);
    };

    actionCell.appendChild(deleteButton);
    actionCell.appendChild(editButton);
}

function displayInput() {
    var name = document.getElementById("nameInput").value;
    var author = document.getElementById("authorInput").value;

    if (name === "" || author === "") {
        alert("Please enter both Name and Author");
        return;
    }

    addRowToTable(name, author);

    var storedData = JSON.parse(localStorage.getItem("bookData")) || [];
    storedData.push({ name: name, author: author });
    localStorage.setItem("bookData", JSON.stringify(storedData));

    document.getElementById("nameInput").value = "";
    document.getElementById("authorInput").value = "";
}

function deleteRow(row) {
    var tableBody = document.getElementById("tableBody");
    var index = row.rowIndex - 1;
    tableBody.deleteRow(index);
    var storedData = JSON.parse(localStorage.getItem("bookData")) || [];
    storedData.splice(index, 1);
    localStorage.setItem("bookData", JSON.stringify(storedData));
}

function editRow(row) {
    var nameCell = row.cells[0];
    var authorCell = row.cells[1];
    var newName = prompt("Enter new name:", nameCell.innerHTML);
    var newAuthor = prompt("Enter new author:", authorCell.innerHTML);
    if (newName !== null && newAuthor !== null) {
        nameCell.innerHTML = newName;
        authorCell.innerHTML = newAuthor;
        var tableBody = document.getElementById("tableBody");
        var index = row.rowIndex - 1;
        var storedData = JSON.parse(localStorage.getItem("bookData")) || [];
        storedData[index] = { name: newName, author: newAuthor };
        localStorage.setItem("bookData", JSON.stringify(storedData));
    }
}

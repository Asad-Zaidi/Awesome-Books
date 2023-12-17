function addBookToStorage(name, author) {
    var storedData = JSON.parse(localStorage.getItem("bookData")) || [];
    storedData.push({ name: name, author: author });
    localStorage.setItem("bookData", JSON.stringify(storedData));
}

function handleAddBook() {
    var name = document.getElementById("nameInput").value;
    var author = document.getElementById("authorInput").value;

    if (name === "" || author === "") {
        alert("Please enter both Name and Author");
        return;
    }

    addBookToStorage(name, author);
    document.getElementById("nameInput").value = "";
    document.getElementById("authorInput").value = "";
}

var addButton = document.getElementById("buttonAdd");
addButton.addEventListener("click", addToDoItems);
function addToDoItem(){
    alert("Add button clicked");
}

var toDoEntryBox = document.getElementById("textAddTodo");
var toDoListItems = document.getElementById("todoListItems");

function newToDoItem(itemText, completed) {
    // Membuat elemen label
    var todoItem = document.createElement("label");

    // Membuat elemen checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Menambahkan event listener untuk toggleToDoItemState
    todoItem.addEventListener("change", toggleToDoItemState);

    // Menambahkan elemen checkbox ke dalam label
    todoItem.appendChild(checkbox);

    // Menambahkan teks todo ke dalam label
    var todoText = document.createTextNode(itemText);
    todoItem.appendChild(todoText);
    todoItem.appendChild(document.createElement("br"))

    // Menambahkan kelas "completed" jika todo telah selesai
    if (completed) {
        todoItem.classList.add("completed");
    }

    // Menambahkan label ke dalam ul
    toDoListItems.appendChild(todoItem);
}


function addToDoItems() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    }else {
        this.classList.add("completed");
    }
}
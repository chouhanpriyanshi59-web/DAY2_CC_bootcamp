function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    // Create list item
    var li = document.createElement("li");

    // Create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create text
    var text = document.createElement("span");
    text.innerText = " " + task + " ";

    // Create delete button
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.onclick = function () {
        li.remove();
    };

    // Add everything to list item
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(delBtn);

    // Add list item to list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    input.value = "";
}
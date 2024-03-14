
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);
        var span = document.createElement("span");
        span.textContent = taskInput.value;
        li.appendChild(span);
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Del";
        deleteButton.onclick = function () {
            li.remove();
        };
        li.appendChild(deleteButton);
        checkbox.onchange = function () {
            if (this.checked) {
                span.classList.add("completed");
            } else {
                span.classList.remove("completed");
            }
        };
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
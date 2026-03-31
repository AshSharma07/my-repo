function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let delBtn = document.createElement("span");
    delBtn.textContent = "❌";
    delBtn.className = "delete";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
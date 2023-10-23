document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            li.querySelector("button.delete-button").addEventListener("click", function() {
                taskList.removeChild(li);
            });
            li.addEventListener("click", function() {
                li.classList.toggle("completed");
            });
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});

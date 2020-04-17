//Module Purpose: HTML representation of a single Task with a delete button     
//Author: Sarah Hart Landolt
const contentTarget = document.querySelector(".tasksContainer")
const eventHub = document.querySelector(".container")

export const Task = taskObject => {
    return `
        <article class="task">
                <h3>Task #${taskObject.id}: ${taskObject.name}</h3>
                <div>To Complete By: ${new Date(taskObject.date).toLocaleDateString('en-US')}</div>
                <div>Task Completed ? <input type="radio" id="complete" name="complete" value="complete">
                <label for="complete"></label></div>     
        <br>
        <button class="button" id="deleteTaskBtn--${taskObject.id}">Delete Task</button>
        <br>
        </article>
    `
}


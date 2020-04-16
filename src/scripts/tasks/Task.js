//Module Purpose: HTML representation of a single Task with a delete button     
//Author: Sarah Hart Landolt

export const Task = taskObject => {
    return `
        <article class="task">
        <input type="radio" class="task" name="task" value="taskName">
        <label for="task">${taskObject.name}</label><br>
            <section>Expected Completion Date: ${new Date(taskObject.date).toLocaleDateString()}</section>
            <button id="deleteTaskBtn--${taskObject.id}">Delete</button>
        </article>
    `
}
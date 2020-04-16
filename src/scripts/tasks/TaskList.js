import { Task } from "./Task.js"
import { deleteTask, useTasks } from "./TaskProvider.js"

//Module Purpose: Having tasks display on the DOM
//Author: Sarah Hart Landolt 

const contentTarget = document.querySelector(".tasksContainer")
const eventHub = document.querySelector(".container")

//Defining a custom event that will let ArticleDialog.js know that the article button was clicked
const dispatchTaskButtonClicked = () => {
    const taskButtonClicked = new CustomEvent("newTaskClicked")
    eventHub.dispatchEvent(taskButtonClicked)
}

contentTarget.addEventListener("click", event => {
    if(event.target.id === "newTaskButton"){
        dispatchTaskButtonClicked()
    }
})

//Display an array of task objects on the DOM
const renderTasks = tasksToRender => {
    let activeUser = parseInt(sessionStorage.getItem("user"))
    const tasksForThisUser = tasksToRender.filter(task => {
        return activeUser = task.userId 
    })
    contentTarget.innerHTML = ` 
        <div><button id="newTaskButton">New Task</button></div>
        <div class="tasks__list">
            ${tasksForThisUser.map(
                    taskForThisUser => {
                        return Task(taskForThisUser)
                    }
                ).join("")}
        </div>`
}

//Allow user to delete a task
contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteTaskBtn--")) {
        const [prefix, taskId] = clickEvent.target.id.split('--')
        deleteTask(taskId)
    }
})

//Eventlistener for event that comes from TaskProvider.js and lets this module know that the task state changed
eventHub.addEventListener("taskStateChanged", Event => {
    TaskList()
})

//Gets the articles and uses renderTasks to display on DOM
export const TaskList = () => {
    const allTasks = useTasks()
    renderTasks(allTasks)
}
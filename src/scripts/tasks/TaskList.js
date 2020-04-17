//Module Purpose: Having tasks display on the DOM
//Author: Sarah Hart Landolt 

import { Task } from "./Task.js"
import { deleteTask, useTasks } from "./TaskProvider.js"

const contentTarget = document.querySelector(".tasksContainer")
const eventHub = document.querySelector(".container")

//Defining a custom event that will let TaskDialog.js know that the task button was clicked
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
    const activeUser = parseInt(sessionStorage.getItem("user"))
    const tasksForThisUser = tasksToRender.filter(task => {
        return activeUser === task.userId 
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

// Re-renders the Task List anytime the state of the Task List is changed:
eventHub.addEventListener("taskListStateChanged", customEvent => {
    TaskList()
})

//Gets the tasks and uses renderTasks to display on DOM
export const TaskList = () => {
    const allTasks = useTasks()
    renderTasks(allTasks)
}
//Module Purpose: Fetching tasks, saving task, and deleting task from the database.json
//Author: Sarah Hart Landolt

let tasks = []

const eventHub = document.querySelector(".container")

// Dispatches a custom event notifying the eventHub anytime the Task List changes:
const taskListStateChange = () => {
    const taskStateChangeEvent = new CustomEvent("taskListStateChanged")
    eventHub.dispatchEvent(taskStateChangeEvent)
}

//Returns a copy of the task objects that are sorted in decending order by date
export const useTasks = () => {
    const sortedByDateDecendingOrder = tasks.sort(
        (newerTask, olderTask) => olderTask.date - newerTask.date 
    )
    return sortedByDateDecendingOrder.slice()
}

//Fetching tasks
export const getTasks = () => fetch("http://localhost:3000/tasks")
    .then(response => response.json())
    .then(parsedTasks => tasks = parsedTasks)

//Will allow user to delete a task then update that state has changed
export const deleteTask = taskId => {
    return fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE"
    })
        .then(getTasks)
        .then(taskListStateChange)
}

//Will allow user to save a task then update that state has changed
export const saveTask = task => {
    return fetch('http://localhost:3000/tasks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
        
    })
    .then(getTasks)
    .then(taskListStateChange)
}
import { saveTask } from "./TaskProvider.js"

//Module Purpose: Rendering HTML representations of Task Dialog
//Author: Sarah Hart Landolt


const contentTarget = document.querySelector(".dialogsContainer")
const eventHub = document.querySelector(".container")

//Event listener that is listening for the custom event that was defined in TaskList.js
eventHub.addEventListener("newTaskClicked", customEvent => {
    const taskDialog = document.querySelector("#task")
    taskDialog.showModal()
})

//Defining a click event for the save task and task will save to the database 
contentTarget.addEventListener("click", event => {
    if(event.target.id === "saveTask") {
        const name = document.querySelector("#taskName").value
        document.querySelector("#taskName").value = ""
        const synopsis = document.querySelector("#synopsis").value
        document.querySelector("#synopsis").value = ""
        const url = document.querySelector("#url").value
        document.querySelector("#url").value = ""
        const userId = 1 //Currently hard coded
        const taskDialog = document.querySelector("#task")
        document.querySelector("#article").value = ""
        const newTask = {
            name: name,
            userId: parseInt(sessionStorage.getItem('user'))
        }   
        //makes article fields required or user gets an alert
        if (name !== "") {
            saveTask(newTask)
        } else {
            alert("Opps, it looks like you forgot to fill out all of the required fields.")
        }

        //Method that closes form dialog
        taskDialog.close()
    }
})

//HTML representation of a form that is nested in a dialog
export const TaskDialog = () => {
    contentTarget.innerHTML += `
        <dialog id="task">
            <fieldset>
                <label class="label--name" for="name">Task Name: </label>
                <input type="text" id="taskName"/>
            </fieldset>
            <button id="saveTask">Save Task</button>
        </dialog>
    `
}


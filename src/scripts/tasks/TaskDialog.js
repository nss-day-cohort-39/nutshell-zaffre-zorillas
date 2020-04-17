import { saveTask } from "./TaskProvider.js"

//Module Purpose: Rendering HTML representations of Task Dialog
//Author: Sarah Hart Landolt


const contentTarget = document.querySelector(".dialogsContainer")
const eventHub = document.querySelector(".container")

//Event listener that is listening for the custom event that was defined in TaskList.js
eventHub.addEventListener("newTaskClicked", customEvent => {
    const taskDialog = document.querySelector("#task__dialog")
    taskDialog.showModal()
})

// Listens for "save" click event and captures data from input fields in task dialog box
contentTarget.addEventListener("click", clickEvent => {
    const taskDialog = document.querySelector("#task__dialog")
    if (clickEvent.target.id === "saveTaskBtn") {
        const taskName = document.querySelector("#task--name").value 
        const expectedCompletionDate = document.querySelector("#task--expectedDate").value 
        const newTask = {
                name: taskName,
                date: expectedCompletionDate,
                userId: parseInt(sessionStorage.getItem("user"))
            }
        if (newTask.name !== "" && newTask.date !== "") {
            saveTask(newTask)
        } else {
            alert("Please complete all fields before saving.")
        }
        taskDialog.close()
    }  
})

//HTML representation of a form that is nested in a dialog
export const TaskDialog = () => {
    contentTarget.innerHTML += `
    <dialog id="task__dialog">
        <fieldset>
            <label for="task--name">Name:</label>
            <input id="task--name" name="task--name" type="text"/>
        </fieldset>
        <fieldset>
            <label for="task--expectedDate">Expected Completion Date:</label>
            <input id="task--expectedDate" name="task--expectedDate" type="date"/>                
        </fieldset>
        <button id="saveTaskBtn">Save Task</button>
    </dialog>
`
}


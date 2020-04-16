// Module Purpose: Renders a dialog box to capture a new event entry
// Author: Crystal Elsey 

import { saveEvent } from "../events/EventProvider.js"

const contentTarget = document.querySelector(".dialogsContainer")
const eventHub = document.querySelector(".container")

// Listens for the custom event "NewEventBtnClicked" from EventList and opens dialog box
eventHub.addEventListener("newEventBtnClicked", customEvent => {
    const eventDialog = document.querySelector("#event__dialog")
    eventDialog.showModal()
})

// Renders HTML for the new event form inside the dialog box
export const EventDialog = () => {
    contentTarget.innerHTML += `
        <dialog id="event__dialog">
            <fieldset>
                <label for="event--date">Date:</label>
                <input id="event--date" name="event--date" type="date"/>                
            </fieldset>
            <fieldset>
                <label for="event--name">Name:</label>
                <input id="event--name" name="event--name" type="text"/>
            </fieldset>
            <fieldset>
                <label for="event--location">Location:</label>
                <input id="event--location" name="event--location" type="text"/>
            </fieldset>
            <button id="saveEventBtn">Save Event</button>
        </dialog>
    `
}

// Listens for "save" click event and captures data from input fields in event dialog box
contentTarget.addEventListener("click", clickEvent => {
    const eventDialog = document.querySelector("#event__dialog")
    if (clickEvent.target.id === "saveEventBtn") {
        const eventDate = document.querySelector("#event--date").value 
        const eventName = document.querySelector("#event--name").value 
        const eventLocation = document.querySelector("#event--location").value 
        const newEvent = {
                date: eventDate,
                name: eventName,
                location: eventLocation,
                userId: parseInt(sessionStorage.getItem("user"))
            }
        if (newEvent.name !== "" && newEvent.location !== "" && newEvent.date !== "") {
            saveEvent(newEvent)
        } else {
            alert("Please complete all fields before saving.")
        }
        eventDialog.close()
    }  
})
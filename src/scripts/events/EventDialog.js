// Module Purpose: Renders a dialog box to capture a new event entry
// Author: Crystal Elsey 

import { useEvents } from "./EventProvider.js"

const contentTarget = document.querySelector(".dialogsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("newEventBtnClicked", customEvent => {
    const eventDialog = document.querySelector("#event__dialog")
    eventDialog.showModal()
})

export const EventDialog = () => {
    contentTarget.innerHTML += `
        <dialog id="event__dialog">
            <form class="event__form">
                <fieldset>
                    <label for="event--date">Date:</label>
                    <input name="event--date" type="date"/>
                </fieldset>
                <fieldset>
                    <label for="event--name">Name:</label>
                    <input name="event--name" type="text"/>
                </fieldset>
                <fieldset>
                    <label for="event--location">Location:</label>
                    <input name="event-name" type="text"/>
                </fieldset>
                <button id="saveEventBtn">Save Event</button>
            </form>
        </dialog>
    `
}
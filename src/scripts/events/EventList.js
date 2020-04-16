// Module Purpose: Render a list of the logged in user's upcoming events
// Author: Crystal Elsey

import { useEvents, deleteEvent } from "./EventProvider.js"
import { Event } from "./Event.js"

const contentTarget = document.querySelector(".eventsContainer")
const eventHub = document.querySelector(".container")

// Renders HTML for "New Event" button & list of the logged in user's events
const renderEvents = (allEvents) => {
    const activeUser = parseInt(sessionStorage.getItem("user"))
    // Filters through all events to find events associated with logged in user
    const eventsForThisUser = allEvents.filter(event => {
        return activeUser === event.userId
    })
    // Maps through array of user's events and converts them to HTML string for the DOM
    contentTarget.innerHTML = `
        <div><button id="newEventBtn">New Event</button></div>
        <div class="events__list">
            ${eventsForThisUser.map(eachEvent => {
                return Event(eachEvent)
            }).join("")} 
        </div>`
}

// Listens for the user to click on a "delete event" button:
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEventBtn--")) {
        // Splits the button ID, and stores the ID in a new variable:
        const [prefix, eventID] = clickEvent.target.id.split("--")
        // Deletes the event whose ID corresponds with the ID of the button clicked:
        deleteEvent(eventID)
    }
})

// Creates, listens for, and dispatches custom event and calls the function to dispatch it:
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newEventBtn") {
        const newEventBtnClickedEvent = new CustomEvent("newEventBtnClicked")
        eventHub.dispatchEvent(newEventBtnClickedEvent)
    }
})

// Exports a function that renders the Event List for use by other modules: 
export const EventList = () => {
    const events = useEvents()
    renderEvents(events)
}

// Re-renders the Event List anytime the state of the Event List is changed:
eventHub.addEventListener("eventListStateChanged", customEvent => {
    EventList()
})
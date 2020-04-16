// Module Purpose: Render a list of the logged in user's upcoming events
// Author: Crystal Elsey

import { useEvents, deleteEvent } from "./EventProvider.js"
import { Event } from "./Event.js"

const contentTarget = document.querySelector(".eventsContainer")
const eventHub = document.querySelector(".container")

// Filters through all events to find events for the logged in user:
const renderEvents = (allEvents) => {
    const user = 1
    const eventsForThisUser = allEvents.filter(event => {
        return user === event.userId
    })
    // Maps through the filtered events, converts them to an HTML string, and puts them on the DOM:
    const eventsHTML = eventsForThisUser.map(event => {
        return Event(event)
    }).join("")
    contentTarget.innerHTML = eventsHTML
}

// Exports a function that renders the Event List for use by other modules: 
export const EventList = () => {
    const events = useEvents()
    renderEvents(events)
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

// Re-renders the Event List anytime the state of the Event List is changed:
eventHub.addEventListener("eventListStateChanged", customEvent => {
    EventList()
})

// Creates, listens for, and dispatches custom event and calls the function to dispatch it:
contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newEventBtn") {
        const newEventBtnClickedEvent = new CustomEvent("newEventBtnClicked")
        eventHub.dispatchEvent(newEventBtnClickedEvent)
    }
})
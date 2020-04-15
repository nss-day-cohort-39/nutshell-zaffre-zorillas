// Module Purpose: Render a list of the logged in user's upcoming events
// Author: Crystal Elsey

import { useEvents, deleteEvent } from "./EventProvider.js"
import { Event } from "./Event.js"

const contentTarget = document.querySelector(".eventsContainer")
const eventHub = document.querySelector(".container")

const renderEvents = (allEvents) => {
    const user = 1
    const eventsForThisUser = allEvents.filter(event => {
        return user === event.userId
    })
    const eventsHTML = eventsForThisUser.map(event => {
        return Event(event)
    }).join("")
    contentTarget.innerHTML = eventsHTML
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEventBtn--")) {
        const [prefix, eventID] = clickEvent.target.id.split("--")
        deleteEvent(eventID)
    }
})

eventHub.addEventListener("eventListStateChanged", customEvent => {
    EventList()
})

export const EventList = () => {
    const events = useEvents()
    renderEvents(events)
}
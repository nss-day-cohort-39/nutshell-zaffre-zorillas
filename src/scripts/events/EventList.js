// Module Responsibility: Render a list of upcoming events by user
// Author: Crystal Elsey

import { useEvents } from "./EventProvider.js"
import { Event } from "./Event.js"

const contentTarget = document.querySelector(".eventsContainer")

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

export const EventList = () => {
    const events = useEvents()
    renderEvents(events)
}
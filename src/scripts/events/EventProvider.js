// Module Purpose: Fetch events data from server & export copy of events data array
// Author: Crystal Elsey

const eventHub = document.querySelector(".container")

let events = []

export const getEvents = () => fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then(parsedEvents => events = parsedEvents)

export const useEvents = () => events.slice()

const eventListStateChange = () => {
    const eventStateChangeEvent = new CustomEvent("eventListStateChanged")
    eventHub.dispatchEvent(eventStateChangeEvent)
}

export const deleteEvent = (eventID) => {
    return fetch(`http://localhost:3000/events/${eventID}`, {
        method: "DELETE"
    })
    .then(getEvents)
    .then(eventListStateChange)
}
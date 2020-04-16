// Module Purpose: Fetch events data from server & export copy of events data array
// Author: Crystal Elsey

const eventHub = document.querySelector(".container")

let events = []

// Fetches the events data from the json server:
export const getEvents = () => fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then(parsedEvents => events = parsedEvents)

// Exports a copy of the events array sorted by date:
export const useEvents = () => events.slice().sort((next, last) => Date.parse(next.date) - Date.parse(last.date))

// Dispatches a custom event notifying the eventHub anytime the Event List changes:
const eventListStateChange = () => {
    const eventStateChangeEvent = new CustomEvent("eventListStateChanged")
    eventHub.dispatchEvent(eventStateChangeEvent)
}

// Removes selected event from fetched data and calls the function notifying EH of the change:
export const deleteEvent = (eventID) => {
    return fetch(`http://localhost:3000/events/${eventID}`, {
        method: "DELETE"
    })
    .then(getEvents)
    .then(eventListStateChange)
}

// Posts saved event to fetched events data and lets EH know the Event List state has changed 
export const saveEvent = (event) => {
    return fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
    .then(getEvents)
    .then(eventListStateChange)
}
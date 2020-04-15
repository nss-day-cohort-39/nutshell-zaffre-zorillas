// Module Purpose: Fetch events data from server & export copy of events data array
// Author: Crystal Elsey

let events = []

export const useEvents = () => events.slice()

export const getEvents = () => fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then(parsedEvents => events = parsedEvents)
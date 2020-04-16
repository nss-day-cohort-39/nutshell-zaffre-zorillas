// Module Purpose: Return a string representation of an event object 
// Author: Crystal Elsey 

import { useEvents } from "./EventProvider.js"

export const Event = (event) => {
    const events = useEvents()
    if (event === events[0]) {
    return `
        <div class="nextEvent">
            <h3>Upcoming Event: ${event.name}</h3>
            <p>Date: ${new Date(event.date).toLocaleDateString('en-US')}</p>
            <p>Location: ${event.location}</p>    
            <p><button id="deleteEventBtn--${event.id}">Delete</button></p>        
        </div>
    `
    } else {
        return `
        <div class="event">
            <h3>Upcoming Event: ${event.name}</h3>
            <p>Date: ${new Date(event.date).toLocaleDateString('en-US')}</p>
            <p>Location: ${event.location}</p>    
            <p><button id="deleteEventBtn--${event.id}">Delete</button></p>        
        </div>
    `
    }
}  
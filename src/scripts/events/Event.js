// Module Purpose: Return a string representation of an event object 
// Author: Crystal Elsey 

export const Event = (event, filteredEvents) => {
    // Adds a class of "nextEvent" to the first object in the array to be edited in CSS
    if (event === filteredEvents[0]) {      
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
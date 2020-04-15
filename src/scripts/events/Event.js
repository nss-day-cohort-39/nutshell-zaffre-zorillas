// Module Purpose: Return a string representation of an event object 
// Author: Crystal Elsey 

export const Event = (event) => {
    return `
        <div class="event">
            <h3>Upcoming Event: ${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>            
        </div>
    `
}
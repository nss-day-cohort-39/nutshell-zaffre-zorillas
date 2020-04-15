//Module purpose: render the registration form and handle the information | author(s): Derek Buckley Sarah Landolt
 

import { saveUser } from "../users/UserProvider.js"

const contentTarget = document.querySelector(".nutshellContainer")
export const RegistrationForm = () => {
    return `
        <fieldset>
            <label for="username">Username</label>
            <input type="text" id="username">
        </fieldset>
        <fieldset>
            <label for="email">Email</label>
            <input type="text" id="email">
        </fieldset>
        <fieldset>
            <label for="password">Password</label>
            <input type="text" id="password">
        </fieldset>
        <fieldset>
            <label for="password">Confirm Password</label>
            <input type="text" id="confirmPassword">
        </fieldset>
        <button class= "button" id="registerUserButton">Register</button>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerUserButton") {
    //   captures values in input fields and stores them in variables
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const confirmPassword = document.querySelector("#confirmPassword").value

        const newUser = {
            username: username,
            email: email,
            password: password
        }

        if (username !== "" && email !== "" && password !== "" && password === confirmPassword){
            
            saveUser(newUser)
        }
        else {
            alert("One or more fields was completed incorrectly. Confirm that all fields are completed correctly and passwords match.");

        }

        // Make a new object representation of a user

        // Change API state and application state
        
    }
})
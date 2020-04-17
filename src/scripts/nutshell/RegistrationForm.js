//Module purpose: render the registration form and handle the information | author(s): Derek Buckley Sarah Landolt

import { saveUser, useUsers, getUsers } from "../users/UserProvider.js"

const contentTarget = document.querySelector(".nutshellContainer")
const eventHub = document.querySelector(".container")

getUsers()

// Renders HTML for the registration form to the DOM
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
    //   Captures values in input fields and stores them in variables
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const confirmPassword = document.querySelector("#confirmPassword").value
        // Stores collected input values into a newUser object 
        const newUser = {
            username: username,
            email: email,
            password: password
        }
        // Sets conditions that form fields must be filled out before saving to the DOM
        if (username !== "" && email !== "" && password !== "" && password === confirmPassword){
            // Filters through users to prevent duplicate registrations
            const allUsers= useUsers()
            if (allUsers.find((user)=>user.email ===email)){
                alert("This email is already registered")
            } else {
                // If user email hasn't already been registered, saves user to session storage
                saveUser(newUser).then(
                    theUserThatWasJustCreated => {
                        sessionStorage.setItem('user', theUserThatWasJustCreated.id)
                        // Dispatches a custom event that a user successfully registered
                        const userRegistered = new CustomEvent("userRegistered", {
                            detail: {
                                id: theUserThatWasJustCreated.id,
                                username: username,
                                email: email,
                                password: password
                            }
                        })
                        eventHub.dispatchEvent(userRegistered)
                    }
                )
            }
        } else {
            alert("One or more fields was completed incorrectly. Confirm that all fields are completed correctly and passwords match.");
        }
    }
})
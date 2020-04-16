// Module Purpose: Renders news, events, tasks, messages, and friends for logged in user
// Authors: Sarah Landolt, Derek Buckley, Crystal Elsey, Kristen Howton

import { WelcomeMessage } from "./WelcomeMessage.js"
import { RegistrationForm } from "./RegistrationForm.js"
import { SignInForm } from "./SignInForm.js"
import { renderHomepage } from "./Homepage.js"
import { useUsers, getUsers } from "../users/UserProvider.js"


getUsers()

const eventHub = document.querySelector(".container")
WelcomeMessage()

const contentTarget = document.querySelector(".nutshellContainer")

eventHub.addEventListener("registerButtonClicked", event => {
    contentTarget.innerHTML = ""
     const registrationFormHTML= RegistrationForm()
     contentTarget.innerHTML = registrationFormHTML

})

eventHub.addEventListener("signInButtonClicked", event => {
    contentTarget.innerHTML = ""
     const signInFormHTML= SignInForm()
     contentTarget.innerHTML = signInFormHTML
})

contentTarget.addEventListener("click", clickEvent => {
    // Make sure it was one of the itinerary buttons
    if (clickEvent.target.id === "userSignInButton") {

        const username = document.querySelector("#username").value
        contentTarget.innerHTML =""
        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifie
            which itinerary was chosen
        */
       const userArray = useUsers()
       const activeUser = userArray.find((user)=>user.username ===username)
       sessionStorage.setItem('user', activeUser.id)
       renderHomepage()
    }
})
eventHub.addEventListener("userRegistered", event => {
    contentTarget.innerHTML = ""
    renderHomepage()
})

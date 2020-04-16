// Module Purpose: Renders news, events, tasks, messages, and friends for logged in user
// Authors: Sarah Landolt, Derek Buckley, Crystal Elsey, Kristen Howton

import { WelcomeMessage } from "./WelcomeMessage.js"
import { RegistrationForm } from "./RegistrationForm.js"
import { SignInForm } from "./SignInForm.js"
import { renderHomepage } from "./Homepage.js"
import { useUsers, getUsers } from "../users/UserProvider.js"



const contentTarget = document.querySelector(".nutshellContainer")
const eventHub = document.querySelector(".container")

WelcomeMessage()



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


eventHub.addEventListener("userRegistered", event => {
    contentTarget.innerHTML = ""
    renderHomepage()
})

eventHub.addEventListener("userSignedIn", event => {
    contentTarget.innerHTML = ""
    renderHomepage()
})

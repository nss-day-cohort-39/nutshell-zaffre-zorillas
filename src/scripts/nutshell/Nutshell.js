// Module Purpose: Renders news, events, tasks, messages, and friends for logged in user
// Authors: Sarah Landolt, Derek Buckley, Crystal Elsey, Kristen Howton

import { WelcomeMessage } from "./WelcomeMessage.js"
import { RegistrationForm } from "./RegistrationForm.js"
import { SignInForm } from "./SignInForm.js"
import { renderHomepage } from "./Homepage.js"

const contentTarget = document.querySelector(".nutshellContainer")
const eventHub = document.querySelector(".container")

WelcomeMessage()

// Renders the Registration Form page when user clicks on the Register button 
eventHub.addEventListener("registerButtonClicked", event => {
    contentTarget.innerHTML = ""
     const registrationFormHTML= RegistrationForm()
     contentTarget.innerHTML = registrationFormHTML

})

// Renders the Sign-in Form page when user clicks on the Sign-in button 
eventHub.addEventListener("signInButtonClicked", event => {
    contentTarget.innerHTML = ""
     const signInFormHTML= SignInForm()
     contentTarget.innerHTML = signInFormHTML
})

// Clears the DOM and renders the homepage once user has registered an account
eventHub.addEventListener("userRegistered", event => {
    contentTarget.innerHTML = ""
    renderHomepage()
})

// Clears the DOM and renders the homepage once a registered user logs in
eventHub.addEventListener("userSignedIn", event => {
    contentTarget.innerHTML = ""
    renderHomepage()
})
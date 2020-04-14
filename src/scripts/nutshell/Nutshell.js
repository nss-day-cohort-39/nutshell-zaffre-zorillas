/* author(s)
  purpose of module
 */



import { WelcomeMessage } from "./WelcomeMessage.js"
import { RegistrationForm } from "./RegistrationForm.js"
import { SignInForm } from "./SignInForm.js"


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

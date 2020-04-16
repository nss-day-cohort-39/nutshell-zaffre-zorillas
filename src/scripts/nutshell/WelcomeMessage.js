// Module purpose: render the Welcome Message HTML
// Author(s): Derek Buckley & Sarah Landolt

const contentTarget = document.querySelector(".nutshellContainer")
const eventHub = document.querySelector(".container")

export const WelcomeMessage = () => {
    contentTarget.innerHTML = `
    <div class=WelcomeMessage>
    <h1> Welcome to Nutshell! </h1>
    <div><h3>Click Below to Register</h3><button class= "button" id= "registerButton">Register</button></div>
    <div><h3>Click Below to Login</h3><button class= "button" id= "signInButton">Login</button></div>
    
    </div>
    `
}

contentTarget.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "registerButton") {
         const clickedButton = clickEvent.target.id
   
        const registerButtonClicked = new CustomEvent("registerButtonClicked", {
            detail: {
                buttonClicked: clickedButton
            }
        })

        eventHub.dispatchEvent(registerButtonClicked)
    }
})
contentTarget.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "signInButton") {
         const clickedButton = clickEvent.target.id
       
        const signInButtonClicked = new CustomEvent("signInButtonClicked", {
            detail: {
                buttonClicked: clickedButton
            }
        })

        eventHub.dispatchEvent(signInButtonClicked)
    }
})
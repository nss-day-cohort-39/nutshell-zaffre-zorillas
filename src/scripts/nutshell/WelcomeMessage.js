
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

    // Make sure it was one of the itinerary buttons
    if (clickEvent.target.id === "registerButton") {
         const clickedButton = clickEvent.target.id
        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which itinerary was chosen
        */
        const registerButtonClicked = new CustomEvent("registerButtonClicked", {
            detail: {
                buttonClicked: clickedButton
            }
        })

        eventHub.dispatchEvent(registerButtonClicked)
    }
})
contentTarget.addEventListener("click", clickEvent => {

    // Make sure it was one of the itinerary buttons
    if (clickEvent.target.id === "signInButton") {
         const clickedButton = clickEvent.target.id
        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which itinerary was chosen
        */
        const signInButtonClicked = new CustomEvent("signInButtonClicked", {
            detail: {
                buttonClicked: clickedButton
            }
        })

        eventHub.dispatchEvent(signInButtonClicked)
    }
})
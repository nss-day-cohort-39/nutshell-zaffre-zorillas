// Module purpose: render the SignInForm HTML
// Author(s): Derek Buckley & Sarah Landolt
import { getUsers, useUsers } from "../users/UserProvider.js"

const contentTarget = document.querySelector(".nutshellContainer")
const eventHub = document.querySelector(".container")

getUsers()

// Renders HTML for the registration form to the DOM
export const SignInForm = () => {
    return `
        <fieldset>
            <label for="username">Username</label>
            <input type="text" id="username">
        </fieldset>
        <fieldset>
            <label for="password">Password</label>
            <input type="text" id="password">
        </fieldset>
        <button class= "button" id="userSignInButton">Login</button>
    `
}

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "userSignInButton") {
        //   Captures values in sign-in form input fields and matches them to registered user
        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const userArray = useUsers()
        const activeUser = userArray.find((user)=>user.username ===username)
        //   Confirms that the user's password is correct
        if (activeUser.password === password) {
            sessionStorage.setItem('user', activeUser.id)
            //   Dispatches custom event notifying EH that a user has signed in
            const userSignedIn = new CustomEvent("userSignedIn", {
                detail: {
                    id: activeUser.id,
                    username: activeUser.username,
                    email: activeUser.email,
                    password: activeUser.password
                }
            })
            eventHub.dispatchEvent(userSignedIn)
        } else {
            alert("Password Incorrect")
        }
    }     
})
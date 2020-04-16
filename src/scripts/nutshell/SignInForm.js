// Module purpose: render the SignInForm HTML
// Author(s): Derek Buckley & Sarah Landolt
import { getUsers, useUsers } from "../users/UserProvider.js"

const contentTarget = document.querySelector(".nutshellContainer")
const eventHub = document.querySelector(".container")

getUsers()

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
    // Make sure it was one of the itinerary buttons
    if (clickEvent.target.id === "userSignInButton") {

        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which itinerary was chosen
        */
       
       const userArray = useUsers()
       const activeUser = userArray.find((user)=>user.username ===username)
       if (activeUser.password ===password) {
        sessionStorage.setItem('user', activeUser.id)
        const userSignedIn = new CustomEvent("userSignedIn", {
         detail: {
             id: activeUser.id,
             username: activeUser.username,
             email: activeUser.email,
             password: activeUser.password
         }
     })
     eventHub.dispatchEvent(userSignedIn)
     }
     else {
         alert("Password Incorrect")
     }

       }
      
       
})








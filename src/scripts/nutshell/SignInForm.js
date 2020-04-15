// Module purpose: render the SignInForm HTML
// Author(s): Derek Buckley & Sarah Landolt
const contentTarget = document.querySelector(".nutshellContainer")

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










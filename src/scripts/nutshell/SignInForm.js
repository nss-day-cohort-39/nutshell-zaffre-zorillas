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
        <button class= "button" id="signInButton">Login</button>
    `
}
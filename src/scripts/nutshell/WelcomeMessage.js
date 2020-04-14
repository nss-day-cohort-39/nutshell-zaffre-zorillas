
contentTarget = document.querySelector(".nutshellContainer")
export const WelcomeMessage = () => {
    contentTarget.innerHtml = `
    <div class=WelcomeMessage>
    <h1> Welcome to Nutshell! </h1>
    <div><h3>Click Below to Register</h3><button class= "button" id= "registerButton">Register</button></div>
    <div><h3>Click Below to Login</h3><button class= "button" id= "loginButton">Login</button></div>
    
    </div>
    `
}

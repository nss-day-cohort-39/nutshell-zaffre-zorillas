let users = []

export const useUsers = () => {
    return users.slice()
}

export const getUsers = () => {
    /*
          Load database state into application state with a fetch().
          Make sure the last `then()` sets the local `attractions`
          variable to what is in the response from the API.
      */
  
    return fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(parsedUsers => {
        users = parsedUsers;
      })
  }
  
  export const saveUser = user => {
    return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    //convert object into string that reps object w/ json.stringify
    body: JSON.stringify(user)
})
// .then(getSavedItineraries)
// //lets other components know something changed
// .then(dispatchStateChangeEvent)
}
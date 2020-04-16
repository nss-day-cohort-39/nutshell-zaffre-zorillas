//Module purpose: To handle fetching user data and posting user data to API | Author(s): Derek Buckley Sarah Landolt

let users = []

export const useUsers = () => {
    return users.slice()
}

export const getUsers = () => {
    return fetch('http://localhost:3000/users')
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
    body: JSON.stringify(user)
})

}

let users = []

export const useUsers = () => {
    return users.slice()
}

export const getUsers = () => {
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
    body: JSON.stringify(user)
})

}

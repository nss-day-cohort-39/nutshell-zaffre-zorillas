let users = []

export const useUsers = () => users.slice()

export const getUsers = () => fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(parsedUsers => users = parsedUsers)
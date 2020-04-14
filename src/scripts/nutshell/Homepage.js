import { getUsers } from "./users/UserProvider.js"
import { getEvents } from "./events/EventProvider.js"
import { EventList } from "./events/EventList.js"

getUsers()
    .then(getEvents)
    .then(EventList)
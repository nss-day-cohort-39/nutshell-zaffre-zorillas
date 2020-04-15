// Module Purpose: Renders news, events, tasks, messages, and friends for logged in user
// Authors: Sarah Landolt, Derek Buckley, Crystal Elsey, Kristen Howton

import { getUsers } from "../users/UserProvider.js"
import { getEvents } from "../events/EventProvider.js"
import { EventList } from "../events/EventList.js"

getUsers()
    .then(getEvents)
    .then(EventList)
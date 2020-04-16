// Module Purpose: Renders a dialog box to capture a new event entry
// Author: Crystal Elsey 

import { useEvents } from "./EventProvider.js"

const contentTarget = document.querySelector(".dialogsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("newEventBtnClicked", customEvent => {
    const eventDialog = document.querySelector("#event")
    eventDialog.showModal()
})
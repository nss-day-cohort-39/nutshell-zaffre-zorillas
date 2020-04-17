// Module Purpose: Renders news, events, tasks, messages, and friends for logged in user
// Authors: Sarah Landolt, Derek Buckley, Crystal Elsey, Kristen Howton

import { getArticles } from "../articles/ArticleProvider.js"
import { ArticleDialog } from "../articles/ArticleDialog.js"
import { ArticleList } from "../articles/ArticleList.js"
import { getEvents } from "../events/EventProvider.js"
import { EventDialog } from "../events/EventDialog.js"
import { getUsers, useUsers } from "../users/UserProvider.js"
import { EventList } from "../events/EventList.js"
import { getTasks } from "../tasks/TaskProvider.js"
import { TaskList } from "../tasks/TaskList.js"
import { TaskDialog } from "../tasks/TaskDialog.js"

export const renderHomepage = () => {
    getUsers()
        .then(useUsers)
        .then(getEvents)
        .then(EventList)
        .then(EventDialog)
        .then(getArticles)
        .then(ArticleDialog)
        .then(ArticleList)
        .then(getTasks)
        .then(TaskList)
        .then(TaskDialog)
    }

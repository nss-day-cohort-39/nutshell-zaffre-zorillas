// Module Purpose: Renders news, events, tasks, messages, and friends for logged in user
// Authors: Sarah Landolt, Derek Buckley, Crystal Elsey, Kristen Howton

import { getArticles } from "../articles/ArticleProvider.js"
import { ArticleDialog } from "../articles/ArticleDialog.js"
import { ArticleList } from "../articles/ArticleList.js"
import { getEvents } from "../events/EventProvider.js"
import { EventDialog } from "../events/EventDialog.js"
import { EventList } from "../events/EventList.js"

getArticles()
    .then(ArticleDialog)
    .then(ArticleList)

getEvents()
    .then(EventDialog)
    .then(EventList)

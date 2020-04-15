//Module Purpose: Having articles display on the DOM
//Author: Kristen Howton

import { Article } from "./Article.js"
import { useArticles } from "./ArticleProvider.js"

const contentTarget = document.querySelector(".articlesContainer")
const eventHub = document.querySelector(".container")

//Eventlistener for event that comes from ArticleProvider.js and lets this module know that the article state changed
eventHub.addEventListener("articleStateChanged", Event => {
    ArticleList()
})

//Defining a custom event that will let ArticleDialog.js know that the article button was clicked
const dispatchArticleButtonClicked = () => {
    const articleButtonClicked = new CustomEvent("newArticleClicked")
    eventHub.dispatchEvent(articleButtonClicked)
}

contentTarget.addEventListener("click", event => {
    if(event.target.id === "newArticleButton"){
        dispatchArticleButtonClicked()
    }
})

//Display an array of article objects on the DOM
const renderArticles = articlesToRender => {
    contentTarget.innerHTML = ` 
        <button id="newArticleButton">New Article</button>
        ${
            articlesToRender.map(
                articleToRender => {
                    return Article(articleToRender)
                }
            ).join("")
        }
    `
}

//Gets the articles and uses renderArticles to display on DOM
export const ArticleList = () => {
    const allArticles = useArticles()
    renderArticles(allArticles)
}

//Module Purpose: Having articles display on the DOM
//Author: Kristen Howton

import { Article } from "./Article.js"
import { useArticles, deleteArticle } from "./ArticleProvider.js"

const contentTarget = document.querySelector(".articlesContainer")
const eventHub = document.querySelector(".container")

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
    let activeUser = parseInt(sessionStorage.getItem("user"))
    const articlesForThisUser = articlesToRender.filter(article => {
        return activeUser = article.userId 
    })
    contentTarget.innerHTML = ` 
        <div><button id="newArticleButton">New Article</button></div>
        <div class="articles__list">
            ${articlesForThisUser.map(
                    articleForThisUser => {
                        return Article(articleForThisUser)
                    }
                ).join("")}
        </div>`
}

//Allow user to delete an article
contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteArticleBtn--")) {
        const [prefix, articleId] = clickEvent.target.id.split('--')
        deleteArticle(articleId)
    }
})

//Eventlistener for event that comes from ArticleProvider.js and lets this module know that the article state changed
eventHub.addEventListener("articleStateChanged", Event => {
    ArticleList()
})

//Gets the articles and uses renderArticles to display on DOM
export const ArticleList = () => {
    const allArticles = useArticles()
    renderArticles(allArticles)
}
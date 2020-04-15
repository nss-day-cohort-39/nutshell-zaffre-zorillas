//Module Purpose: Fetching articles, saving articles, and deleting articles from the database.json
//Author: Kristen Howton 

let articles = []

const eventHub = document.querySelector(".container")

//Defining a custom event that will let ArticleList.js know that the article state changed
const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")
    eventHub.dispatchEvent(articleStateChangedEvent)
}

//Returns a copy of the article objects
export const useArticles = () => articles.slice()

//Fetching articles
export const getArticles = () => fetch("http://localhost:3000/news")
    .then(response => response.json())
    .then(parsedArticles => articles = parsedArticles)

//Will allow user to delete an article then update that state has changed
export const deleteArticle = articleId => {
    return fetch(`http://localhost:3000/news/${articleId}`, {
        method: "DELETE"
    })
        .then(getArticles)
        .then(dispatchStateChangeEvent)
}

//Will allow user to save an article then update that state has changed
export const saveArticle = article => {
    return fetch('http://localhost:3000/news', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
        
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}
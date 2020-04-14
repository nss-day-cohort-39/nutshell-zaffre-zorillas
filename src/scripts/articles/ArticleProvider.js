/*
    Author: Kristen Howton
    Module Purpose: Fetching articles from the database.json
*/

let articles = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")
    eventHub.dispatchEvent(articleStateChangedEvent)
}

export const useArticles = () => articles.slice()

export const getArticles = () => fetch("http://localhost:3000/news")
    .then(response => response.json())
    .then(parsedArticles => articles = parsedArticles.reverse())

export const deleteArticle = articleId => {
    return fetch(`http://localhost:3000/news/${articleId}`, {
        method: "DELETE"
    })
        .then(getNews)
        .then(dispatchStateChangeEvent)
}

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
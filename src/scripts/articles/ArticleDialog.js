/*
    Author: Kristen Howton
    Module Purpose: Rendering HTML representation of an Articles
*/

import { saveArticle } from "./ArticleProvider.js"

const contentTarget = document.querySelector(".articlesContainer")
const eventHub = document.querySelector(".container")

const articleFactory = (userId, title, synopsis, url) => {
    return {
        title: title,
        synopsis: synopsis,
        date: Date.now(),
        url: url,
        userId: userId,
    }
}

eventHub.addEventListener("newArticleClicked", customEvent => {
    const articleDialog = document.querySelector("#article")
    articleDialog.showModal()
})

contentTarget.addEventListener("click", event => {
    if(event.target.id === "saveArticle") {
        const userId = 0 // Somehow get the userId
        const articleDialog = document.querySelector("#article")
        const newsTitle = document.querySelector("#title").value
        const synopsis = document.querySelector("#synopsis").value
        const url = document.querySelector("#url").value
        const newArticle = articleFactory(userId, newsTitle, synopsis, url)
        
        saveArticle(newArticle)

        articleDialog.close()
    }
})

export const ArticleDialog = () => {
    contentTarget.innerHTML = `
        <dialog id="article">
            <fieldset>
                <label class="label--notes" for="title">News Title: </label>
                <input type="text" id="title"/>
            </fieldset>
            <fieldset>
                <label class="label label--notes" for="synopsis">Synopsis: </label>
                <textarea id="synopsis"></textarea>
            </fieldset>
            <fieldset>
                <label class="label label--notes" for="url">URL: </label>
                <input type="text" id="url"/>
            </fieldset>
            <button id="saveArticle">Save Article</button>
        </dialog>
    `
}




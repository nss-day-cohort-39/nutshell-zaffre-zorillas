//Module Purpose: Rendering HTML representations of Articles
//Author: Kristen Howton

import { saveArticle } from "./ArticleProvider.js"

const contentTarget = document.querySelector(".dialogsContainer")
const eventHub = document.querySelector(".container")

//Factory function that returns the objects
const articleFactory = (title, synopsis, url, userId) => {
    return {
        title: title,
        synopsis: synopsis,
        date: Date.now(),
        url: url,
        userId: userId,
    }
}

//Event listener that is listening for the custom event that was defined in ArticleList.js
eventHub.addEventListener("newArticleClicked", customEvent => {
    const articleDialog = document.querySelector("#article")
    articleDialog.showModal()
})

//Defining a click event for the save article and article will save to the database 
contentTarget.addEventListener("click", event => {
    if(event.target.id === "saveArticle") {
        const title = document.querySelector("#title").value
        document.querySelector("#title").value = ""
        const synopsis = document.querySelector("#synopsis").value
        document.querySelector("#synopsis").value = ""
        const url = document.querySelector("#url").value
        document.querySelector("#url").value = ""
        const userId = 1 //Currently hard coded
        const articleDialog = document.querySelector("#article")
        document.querySelector("#article").value = ""
        const newArticle = articleFactory(title, synopsis, url, userId)
        
        if (title !== "" && synopsis !== "" && url !== "") {
            saveArticle(newArticle)
        } else {
            alert("Opps, it looks like you forgot to fill out all of the required fields.")
        }

        
        //Method that closes form dialog
        articleDialog.close()
    }
})

//HTML representatin of a form that is nested in a dialog
export const ArticleDialog = () => {
    contentTarget.innerHTML = `
        <dialog id="article">
            <fieldset>
                <label class="label--title" for="title">News Title: </label>
                <input type="text" id="title"/>
            </fieldset>
            <fieldset>
                <label class="label--synopsis" for="synopsis">Synopsis: </label>
                <textarea id="synopsis"></textarea>
            </fieldset>
            <fieldset>
                <label class="label--url" for="url">URL: </label>
                <input type="text" id="url"/>
            </fieldset>
            <button id="saveArticle">Save Article</button>
        </dialog>
    `
}




/*
    Author: Kristen Howton
    Module Purpose: Having articles display on the DOM
*/

const contentTarget = document.querySelector(".articlesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("articleStateChanged", Event => {
    ArticleList()
})

const renderArticles = articlesToRender => {
    contentTarget.innerHTML = articlesToRender.map(
        articleToRender => {
            return Article(articleToRender)
        }
    ).join("")
}

export const ArticleList = () => {
    const allArticles = useArticles()
    renderArticles(allArticles)
}
//Module Purpose: HTML representation of a single article with a delete button     
//Author: Kristen Howton

export const Article = articleObject => {
    return `
        <article class="article">
            <h3>News Title: ${articleObject.title}</h3>
            <section>Synopsis: ${articleObject.synopsis}</section>
            <section>URL: ${articleObject.url}</section>
            <section>Date: ${new Date(articleObject.date).toLocaleDateString()}</section>
            <button id="deleteArticleBtn--${articleObject.id}">Delete</button>
        </article>
    `
}
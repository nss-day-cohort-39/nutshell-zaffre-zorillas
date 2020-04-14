import { ArticleList } from "../articles/ArticleList.js"
import { getArticles } from "../articles/ArticleProvider.js"
import { ArticleDialog } from "../articles/ArticleDialog.js"

getArticles
    .then(ArticleList)

ArticleDialog()
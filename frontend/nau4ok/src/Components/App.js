import React from 'react'
import ArticleList from './ArticleList'
import Article from './Article'
import articles from '../articles'

import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container">
            <h1 className="jumbotron">Nau4OK</h1>
            {/*<ArticleList articles={articles}/>*/}
            <Article article={articles[0]} />
        </div>
    )
}

export default App;
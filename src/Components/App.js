import React from 'react'
import ArticleList from './ArticleList'
import articles from '../articles'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="container">
            <h1 className="jumbotron">Nau4OK</h1>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App;
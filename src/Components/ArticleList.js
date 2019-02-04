import React from 'react'
import ArticleCard from './ArticleCard'
import './ArticleCard/style.css'

export default function ArticleList({ articles }) {
    var i = 0;
    const articleElements = articles.map(article => {
        i++;
        const isBigSized = (i - 4) % 7 === 0 || i % 7 === 0;
        const liClass = (isBigSized ? "cards__item--big" : "cards__item");
        return (
            <li className={liClass}>
                <ArticleCard article={article}/>
            </li>
        )
    });

    return (
        <ul className="cards">
            {articleElements}
        </ul>
    )
}

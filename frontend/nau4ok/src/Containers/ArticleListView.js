import React, {Component} from 'react'
import ArticleCard from '../Components/ArticleCard'
import axios from 'axios'

class ArticleList extends Component {
    state = {
        articles: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8000/api/articles').then(res => {
            this.setState({
                articles: res.data,
            });
        });
    }

    render() {
        var i = 0;
        const articleElements = this.state.articles.map(article => {
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
}

export default ArticleList;

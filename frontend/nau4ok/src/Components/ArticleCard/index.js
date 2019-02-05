import React, {Component} from 'react'
import './style.css'


class ArticleCard extends Component {
    render() {
        const {article} = this.props;
        // const path = article.image.split('/');
        const image = article.image;

        return (
            <div className="card">
                <div className="card__image" style={{'background-image': 'url(' + image + ')'}}></div>
                <div className="card__content">
                    <div className="card__title">{article.title}</div>
                    <p className="card__text">{article.text.split(" ").slice(0, 50).join(" ")}</p>
                    <a style={{textDecoration: 'none'}} href={`/articles/${article.id}`}>
                        <div className="btn btn--block card__btn">Button</div>
                    </a>
                </div>
            </div>
        );
    }
}


export default ArticleCard;

import React, {Component} from 'react'


class ArticleCard extends Component {
    render() {
        const {article} = this.props;

        return (
            <div className="card">
                <a href={`/articles/${article.id}`}>
                    <div className="card__image" style={{'background-image': 'url(' + article.image + ')'}}></div>
                </a>
                <div className="card__content">
                    <div className="card__title">{article.title}</div>
                    <p className="card__text">{article.description.split(" ").slice(0, 50).join(" ")}</p>
                    <a style={{textDecoration: 'none'}} href={`/articles/${article.id}`}>
                        <div className="card-button btn--block card__btn">Открыть статью</div>
                    </a>
                </div>
            </div>
        );
    }
}


export default ArticleCard;

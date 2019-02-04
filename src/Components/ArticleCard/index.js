import React, {Component} from 'react'
import './styles.less'


class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const {article} = this.props;
        const image = require('../../static/image.jpg');

        return (
            <div className="card">
                <div className="card__image" style={{'background-image': 'url(' + image +')'}}></div>
                <div className="card__content">
                    <div className="card__title">{article.title}</div>
                    <p className="card__text">{article.body.split(" ").slice(0, 50).join(" ")}</p>
                    <button className="btn btn--block card__btn">Button</button>
                </div>
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article;

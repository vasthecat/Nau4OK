import React, {Component} from 'react'


class Article extends Component {
    render() {
        const {article} = this.props;

        let articleTitle = 'Default title';

        if (article.title) {
            articleTitle = article.title;
        }

        let paragraphs = <p>There is not article.</p>;

        if (article.text) {
            paragraphs = article.text.split('\n').map(par => {
                return <p className="paragraph">{par}</p>
            });
        }

        let articleImage = require('../../static/image.jpg');

        if (article.image) {
            articleImage = article.image;
        }

        let author = 'Author is not specified';

        if (article.author) {
            author = article.author;
        }

        return (
            <div>
                <img src={articleImage} alt="Article" className="img-fluid mt-5"/>
                <h1 className="display-3 mt-5">
                    {articleTitle}
                </h1>

                <div className="my-4 d-flex flex-row">
                    <div className="p-2">
                        <img src={require('../../static/image.jpg')} alt="User avatar" className="avatar"/>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="ml-2 mt-1"><h2>{author}</h2></div>
                        <div className="ml-2 mt-1">An journalist</div>
                    </div>
                </div>
                {paragraphs}
            </div>
        );
    }
}


export default Article;

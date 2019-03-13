import React, {Component} from 'react'


class Article extends Component {

    render() {
        const {article, author} = this.props;

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

        let articleImage = require('../../static/images/image.jpg');

        if (article.image) {
            articleImage = article.image;
        }

        let fullName = 'Author is not specified';

        if (author.first_name && author.last_name) {
            fullName = author.first_name + ' ' + author.last_name;
        }

        let avatar = require('../../static/images/image.jpg');

        if (author.avatar) {
            avatar = author.avatar;
        }


        return (
            <div className="container">
                <img src={articleImage} alt="Article" className="img-fluid" style={{'paddingTop': '100px'}}/>

                <h1 className="display-3 mt-5">
                    {articleTitle}
                </h1>

                <div className="my-4 d-flex flex-row">
                    <div className="p-2">
                        <img src={avatar} alt="User avatar" className="avatar"/>
                    </div>
                    <div className="d-flex flex-column">
                        <div className="ml-2 mt-1">
                            <div className="d-flex flex-row">
                                <h2>{fullName}</h2>
                            </div>
                        </div>
                        <div className="ml-2 mt-1">An journalist</div>
                    </div>
                </div>


                {paragraphs}
            </div>
        );
    }
}


export default Article;

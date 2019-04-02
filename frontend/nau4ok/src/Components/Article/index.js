import React, {Component} from 'react'
import Commentary from "../Commentary";
import LeaveComment from "../LeaveComment";
import ArticleCard from "../ArticleCard";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";


class Article extends Component {

    generateComments() {
        return this.props.article.article_comments.map(comment => {
            return (
                <Commentary comment={comment}/>
            )
        });
    }

    render() {
        const commentElements = this.generateComments();

        const {article, author} = this.props;

        let articleTitle = 'Default title';

        if (article.title) {
            articleTitle = article.title;
        }

        let paragraphs = <p>There is not article.</p>;

        if (article.text) {
            paragraphs = article.text.split('\n').map(par => {
                if (par.toString().startsWith('[img')) {
                    let s = par.toString();
                    const l = s.slice(1, s.length - 2).split('|');

                    return (
                        <p style={{'margin-bottom': '50px'}}>
                            <img src={l[1]} alt={l[2]} className="article-image-inline"/>
                            <div className="display-4 text-center article-image-caption">{l[2]}</div>
                        </p>
                    )
                }
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
                <img src={articleImage} alt="Article" className="img-fluid article-main-image mx-auto"/>

                <h1 className="display-3 mt-5">
                    {articleTitle}
                </h1>

                <div className="my-4 d-flex flex-row">
                    <div className="p-2">
                        <img src={avatar} alt="User avatar" className="avatar-medium"/>
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

                {/*<div className="display-4" style={{'margin-top': '60px'}}>Комментарии:</div>*/}

                {this.props.isAuthenticated ? (<LeaveComment/>) : ('')}
                {commentElements}



                <div style={{'margin-bottom': '50px'}}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null,
    }
};

export default withRouter(connect(mapStateToProps)(Article));

import React, {Component} from 'react'
import Commentary from "../Commentary";
import LeaveComment from "../LeaveComment";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {LOCALHOST} from "../../constants";


class Article extends Component {

    state = {
        comments: []
    };

    generateComments() {
        return this.props.article.article_comments.map(comment => {
            return (
                <Commentary comment={comment}/>
            )
        });
    }

    componentDidMount() {
        this.setState({
            comments: this.generateComments()
        })
    }

    render() {
        const {article, author} = this.props;

        let articleTitle = article.title ? article.title : 'Title is not specified';
        let articleImage = article.image ? article.image : require('../../static/images/image.jpg');
        let avatar = author.avatar ? author.avatar : require('../../static/images/default-avatar.png');

        let paragraphs = article.text ? (
            article.text.split('\n').map(par => {
                if (par.toString().startsWith('[img')) {
                    let s = par.toString();
                    const l = s.slice(1, s.length - 2).split('|');

                    return (
                        <p style={{'margin-bottom': '50px'}}>
                            <img src={LOCALHOST + l[1]} alt={l[2]} className="article-image-inline"/>
                            <div className="display-4 text-center article-image-caption">{l[2]}</div>
                        </p>
                    )
                }
                return <p className="paragraph">{par}</p>
            })
        ) : <p>There is not article.</p>;

        let fullName = author.username;
        if (author.first_name && author.last_name) {
            fullName = author.first_name + ' ' + author.last_name;
        }
        console.log(author);

        return (
            <div className="container">
                <img src={articleImage} alt="Article" className="img-fluid article-main-image mx-auto"/>

                <h1 className="article-title mt-5">
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
                        <div className="ml-2 mt-1">{author.bio}</div>
                    </div>
                </div>

                {paragraphs}

                {this.props.isAuthenticated ? (<LeaveComment/>) : ('')}
                {this.state.comments}

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

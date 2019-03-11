import React, {Component} from 'react'
import axios from 'axios'
import Article from "../Components/Article";
import * as constants from '../constants'

class ArticleDetail extends Component {
    state = {
        article: {},
        author: {},
        mounted: false
    };

    componentWillMount() {
        const articleID = this.props.match.params.articleID;

        axios.get(`${constants.LOCALHOST}/api/articles/${articleID}`).then(res => {
            this.setState({
                article: res.data,
            });
            axios.get(`${constants.LOCALHOST}/api/users/${this.state.article.author}`).then(res => {
                this.setState({
                    author: res.data,
                    mounted: true
                });
            });
        });
    }

    render() {
        if (this.state.mounted) {
            return (
                <Article article={this.state.article} author={this.state.author}/>
            )
        } else {
            return null
        }
    }
}

export default ArticleDetail;

import React, {Component} from 'react'
import axios from 'axios'
import Article from "../Components/Article";


class ArticleDetail extends Component {
    state = {
        article: {},
        author: {},
        mounted: false
    };

    componentWillMount() {
        const articleID = this.props.match.params.articleID;

        axios.get(`http://karmanline.ddns.net:8000/api/articles/${articleID}`).then(res => {
            this.setState({
                article: res.data,
            });
            axios.get(`http://karmanline.ddns.net:8000/api/users/${this.state.article.author}`).then(res => {
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

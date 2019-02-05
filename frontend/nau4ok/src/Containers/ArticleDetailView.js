import React, {Component} from 'react'
import axios from 'axios'
import '../Components/ArticleCard/style.css'
import Article from "../Components/Article";
import { Button, Card } from 'antd';


class ArticleDetail extends Component {
    state = {
        article: {},
    };

    componentDidMount() {
        const articleID = this.props.match.params.articleID;

        axios.get(`http://localhost:8000/api/${articleID}`).then(res => {
            this.setState({
                article: res.data,
            });
        });
    }

    render() {
        return (
            <Article article={this.state.article}/>

        )
    }
}

export default ArticleDetail;

import React, {Component} from 'react'
import axios from "axios";
import * as constants from "../../constants";

export default class Commentary extends Component {
    state = {
        author: {},
        mounted: false
    };

    componentWillMount() {
        const userID = this.props.comment.author;


        axios.get(`${constants.LOCALHOST}/api/users/${userID}`).then(res => {
            this.setState({
                author: res.data,
                mounted: true
            });
        });
    }

    render() {
        const {comment} = this.props;

        let avatar = require('../../static/images/image.jpg');
        const author = this.state.author;

        if (author.avatar) {
            avatar = author.avatar;
        }

        let fullName = author.username;

        if (author.first_name && author.last_name) {
            fullName = author.first_name + ' ' + author.last_name;
        }

        return (
            <div className="floating-container comment-container">
                <img src={avatar} className="avatar-medium comment-avatar"/>
                <div className="comment-content">
                    <div className="comment-username">{fullName}</div>
                    <div>
                        {comment.text}
                        <br/>
                        {comment.published_date}
                    </div>
                </div>
            </div>
        );
    }

}

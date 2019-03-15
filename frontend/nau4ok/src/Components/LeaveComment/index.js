import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import axios from 'axios'
import * as constants from '../../constants'

class LeaveComment extends Component {
    state = {
        commentText: '',
    };

    leaveComment = (event) => {
        axios.post(`${constants.LOCALHOST}/api/comments/`, {
            author: this.props.userId,
            article: parseInt(this.props.match.params.articleID),
            text: this.state.commentText,
        }, {
            headers: {'Authorization': 'Token ' + this.props.token}
        })
    };

    changeCommentText = (event) => {
        this.setState({
            commentText: event.target.value,
        });
        console.log(event.target.value)
    };

    render() {
        let avatar = require('../../static/images/avatar.jpg');
        if (this.props.avatar) {
            avatar = this.props.avatar;
        }

        return (
            <div className="floating-container comment-container">
                <img src={avatar} className="avatar-medium comment-avatar"/>
                <div className="comment-content">
                    <div className="comment-username">Оставьте ваш комментарий</div>
                    <textarea placeholder={"Ваш комментарий"} className="comment-textarea"
                              onChange={this.changeCommentText}/>
                    <a style={{textDecoration: 'none'}} href=''>
                        <div onClick={this.leaveComment}
                             className="card-button btn--block card__btn comment-button">Отправить
                        </div>
                    </a>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        username: state.username,
        first_name: state.first_name,
        last_name: state.last_name,
        email: state.email,
        avatar: state.avatar,
        userId: state.userId,
        token: state.token,
    };
};

export default withRouter(connect(mapStateToProps)(LeaveComment));
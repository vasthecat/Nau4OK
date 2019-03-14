import React, {Component} from 'react'

export default class LeaveComment extends Component {

    render() {
        const img = require('../../static/images/avatar.jpg');

        return (
            <div className="floating-container comment-container">
                <img src={img} className="avatar-medium comment-avatar"/>
                <div className="comment-content">
                    <div className="comment-username">Оставьте ваш комментарий</div>
                    <textarea placeholder={"Ваш комментарий"} className="comment-textarea"/>
                    <a style={{'textDecoration': 'none'}} href=''>
                        <div className="card-button btn--block card__btn comment-button">Отправить</div>
                    </a>
                </div>
            </div>
        )
    }

}

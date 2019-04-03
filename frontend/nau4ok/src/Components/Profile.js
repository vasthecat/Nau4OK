import React, {Component} from 'react'
import ArticleCard from "./ArticleCard";
import {LOCALHOST} from "../constants";
import Commentary from "./Commentary";
import {AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios} from 'react-axios'

import axios from "axios";
import * as constants from "../constants";


class Profile extends Component {

    state = {
        user: {}
    };

    generateComments() {
        if (this.props.user.user_comments.length === 0) {
            return (<div className="user-activity">
                <div className="activity-content"><h3 align="center">Нет активности</h3></div>
            </div>)
        }

        return this.props.user.user_comments.map(comment => {
            return (
                <div className="user-activity">
                    <Get url={`${constants.LOCALHOST}/api/articles/${comment.article}`}>
                        {(error, response, isLoading, makeRequest, axios) => {
                            if (error) {
                                return null
                            }
                            else if (isLoading) {
                                return null
                            }
                            else if (response !== null) {
                                return (<div className="activity-content">
                                    <h4>Пользователь {this.state.user.username} оставил комментарий к статье: </h4><h4>
                                    <a href={`/articles/${comment.article}`}>{response.data.title}</a></h4>
                                    <b>Комментарий</b>: {comment.text}
                                </div>)
                            }
                            return (<div>Default message before request is made.</div>)

                        }}
                    </Get>


                </div>

            )
        });
    }

    componentWillMount() {
        this.setState({
            user: this.props.user
        })
    }

    render() {
        let userAvatar = this.state.user.avatar;
        const profileAvatar = userAvatar ? userAvatar : require('../static/images/default-avatar.png');
        const articleImage = require('../static/images/image.jpg');


        return (
            <div className="login-bg">
                <div className="login-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="profile-section">
                                    <div className="floating-container">
                                        <img src={profileAvatar} alt="" className="profile-avatar"/>

                                        <div className="profile-content">
                                            <div
                                                className="user-fullname">{this.state.user.first_name} {this.state.user.last_name}</div>
                                            <div>Username: {this.state.user.username}</div>
                                            <div>E-mail: {this.state.user.email}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <section className="activities">
                                    {this.generateComments()}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Profile;

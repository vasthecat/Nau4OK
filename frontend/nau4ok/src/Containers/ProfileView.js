import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Profile from '../Components/Profile'
import axios from "axios";
import * as constants from "../constants";

class ProfileView extends Component {

    state = {
        user: {},
        mounted: false,
        profileID: null
    };

    componentDidUpdate() {
        if (this.state.profileID !== null) return;

        let profileID = this.props.match.params.profileID;

        if (profileID === undefined) profileID = this.props.userId;
        console.log(profileID);

        axios.get(`${constants.LOCALHOST}/api/users/${profileID}`).then(res => {
            this.setState({
                user: res.data,
                mounted: true,
                profileID: profileID
            });
        });
    }

    render() {
        if (this.state.mounted) {
            console.log(this.state.user)
            return (
                <Profile user={this.state.user}/>
            )
        } else return null;
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

export default withRouter(connect(mapStateToProps)(ProfileView));

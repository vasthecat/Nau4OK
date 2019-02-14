import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Profile from '../Components/Profile'
import axios from "axios";

class ProfileView extends Component {

    state = {
        user: {},
        mounted: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        let profileID = this.props.match.params.profileID;

        if (profileID === undefined) profileID = this.props.userId;

        axios.get(`http://karmanline.ddns.net:8000/api/users/${profileID}`).then(res => {
            this.setState({
                user: res.data,
                mounted: true
            });
        });
    }

    render() {
        if (this.state.mounted) {
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

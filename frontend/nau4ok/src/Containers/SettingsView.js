import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Settings from '../Components/Settings'

class SettingsView extends Component {

    render() {

        return (
            <Settings/>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: {
            username: state.username,
            first_name: state.first_name,
            last_name: state.last_name,
            email: state.email,
            avatar: state.avatar,
            userId: state.userId,
        },
        token: state.token,
    };
};

export default withRouter(connect(mapStateToProps)(SettingsView));
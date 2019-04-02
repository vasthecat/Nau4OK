import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';
import Footer from '../Components/Footer';
import Navbar from './../Components/Navbar'

class CustomLayout extends React.Component {

    render() {
        return (
            <div>
                <Navbar user={this.props.user} logout={this.props.logout} handleSearch={this.props.handleSearch} isAuthenticated={this.props.isAuthenticated}/>
                {this.props.children}
                <Footer/>
            </div>
        );
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


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
        handleSearch: (event) => dispatch(actions.searchChanged(event.target.value))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomLayout));
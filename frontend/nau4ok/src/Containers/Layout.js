import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';

class CustomLayout extends React.Component {
    render() {
        const signedInButtons = (
            <ul className="navbar-nav mt-2 mt-md-0">
                <li className="dropdown">
                    <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2">{this.props.username}</span>
                        <img src={require('../static/avatar.jpg')} alt="User avatar" className="avatar-mini"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"/>
                        <a className="dropdown-item" href="/" onClick={this.props.logout}>Logout</a>
                    </div>
                </li>
            </ul>
        );

        const loginButton = (
            <ul className="navbar-nav mt-2 mt-md-0">
                <li className="nav-item mx-1">
                    <a href='/login' style={{'color': 'white'}}>
                        <div className="btn my-2 my-sm-0 login-button">
                            Log in
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href='/signup' style={{'color': 'white'}}>
                        <div tabIndex="0" className="btn my-2 my-sm-0 signup-button">
                            Sign up
                        </div>
                    </a>
                </li>
            </ul>
        );

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar--styled">
                    <div className="container my-1">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="/">Nau4OK</a>

                            <input className="mx-auto search-form" type="search" placeholder="Search" aria-label="Search"/>

                            {this.props.isAuthenticated ? (signedInButtons) : (loginButton)}

                        </div>
                    </div>
                </nav>

                {this.props.children}
            </div>
        );
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


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomLayout));
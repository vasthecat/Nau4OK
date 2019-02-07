import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';

class CustomLayout extends React.Component {
    render() {
        const signInButtons = (
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
        );

        const loginButton = (
            <li className="">
                <a href='/login' style={{'color': 'white'}}>
                    <div className="btn btn-primary my-2 my-sm-0">
                        Log in
                    </div>
                </a>
            </li>
        );

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark navbar--styled">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="/">Nau4OK</a>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                {
                                    this.props.isAuthenticated ?
                                        <li className="nav-item">
                                            <a href='/' className="nav-link" onClick={this.props.logout}>Logout</a>
                                        </li>

                                        :

                                        <li className="nav-item">
                                            <a className="nav-link" href={"/login"}>Login</a>
                                        </li>
                                }

                                <li className='nav-item'>
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search" style={{'width': '100%'}}/>
                                </li>
                            </ul>

                            <ul className="navbar-nav mt-2 mt-md-0">
                                {this.props.isAuthenticated ? (signInButtons) : (loginButton)}
                            </ul>

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
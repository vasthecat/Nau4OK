import React, {Component} from 'react'
import {LOCALHOST} from "../constants";


export default class Navbar extends Component {

    render() {
        const {user, logout, handleSearch, isAuthenticated} = this.props;

        const nau4okLogo = require('../static/images/Logo.png');

        const signedInButtons = (
            <ul className="navbar-nav mt-2 mt-md-0">
                <li className="dropdown">
                    <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2">{this.props.user.username}</span>
                        <img src={(
                            this.props.user.avatar ?
                                LOCALHOST + this.props.user.avatar
                                :
                                require('../static/images/default-avatar.png')
                        )} alt="User avatar" className="avatar-mini"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/профиль">Профиль</a>
                        <div className="dropdown-divider"/>
                        <a className="dropdown-item" href="" onClick={logout}>Выйти</a>
                    </div>
                </li>
            </ul>
        );

        const loginButton = (
            <ul className="navbar-nav mt-2 mt-md-0">
                <li className="nav-item mx-1">
                    <a href='/войти' style={{'color': 'white'}}>
                        <div className="btn my-2 my-sm-0 login-button">
                            Войти
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href='/регистрация' style={{'color': 'white'}}>
                        <div tabIndex="0" className="btn my-2 my-sm-0 signup-button">
                            Регистрация
                        </div>
                    </a>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar--styled">
                <div className="container my-1">
                    <a className="navbar-brand" href="/">
                        <img src={nau4okLogo} style={{'min-height': '50px', 'max-height': '50px'}}/>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <input className="mx-auto search-form" type="search" placeholder="Поиск" aria-label="Search" onChange={this.props.handleSearch}/>
                        {this.props.isAuthenticated ? (signedInButtons) : (loginButton)}
                    </div>
                </div>
            </nav>
        )

    }

}

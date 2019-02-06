import React from 'react';
import {Link} from 'react-router-dom';
import ArticleListView from "./ArticleListView";


const CustomLayout = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar--styled">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">Nau4OK</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div className="container">
                {props.children}
            </div>
        </div>
    );
};


export default CustomLayout;
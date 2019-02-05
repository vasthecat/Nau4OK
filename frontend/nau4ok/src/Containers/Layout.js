import React from 'react';
import {Link} from 'react-router-dom';
import ArticleListView from "./ArticleListView";


const CustomLayout = (props) => {
    return (
        <div className="container">
            <h1 className="jumbotron">Nau4OK</h1>
            {props.children}
        </div>
    );
}

export default CustomLayout;
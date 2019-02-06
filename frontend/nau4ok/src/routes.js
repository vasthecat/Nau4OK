import React from 'react';
import {Route} from 'react-router-dom';

import ArticleList from './Containers/ArticleListView'
import ArticleDetail from './Containers/ArticleDetailView'
import Login from "./Containers/Login";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/articles/:articleID' component={ArticleDetail}/>
        <Route exact path="/login/" component={Login}/>{" "}
    </div>
);

export default BaseRouter;
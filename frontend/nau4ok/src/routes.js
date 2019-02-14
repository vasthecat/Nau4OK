import React from 'react';
import {Route} from 'react-router-dom';

import ArticleList from './Containers/ArticleListView'
import ArticleDetail from './Containers/ArticleDetailView'
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import ProfileView from './Containers/ProfileView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/articles/:articleID' component={ArticleDetail}/>
        <Route exact path="/login/" component={Login}/>{" "}
        <Route exact path="/signup/" component={Signup} />
        <Route exact path="/profile/:profileID" component={ProfileView}/>
        <Route exact path="/profile" component={ProfileView}/>
    </div>
);

export default BaseRouter;
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
        <Route exact path='/статьи/:articleID' component={ArticleDetail}/>
        <Route exact path="/войти/" component={Login}/>{" "}
        <Route exact path="/регистрация/" component={Signup} />
        <Route exact path="/профиль/:profileID" component={ProfileView}/>
        <Route exact path="/профиль" component={ProfileView}/>
    </div>
);

export default BaseRouter;
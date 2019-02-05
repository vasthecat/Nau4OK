import React from 'react';
import {Route} from 'react-router-dom';

import ArticleList from './Containers/ArticleListView'
import ArticleDetail from './Containers/ArticleDetailView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/articles/:articleID' component={ArticleDetail}/>
    </div>
);

export default BaseRouter;
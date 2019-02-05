import 'bootstrap/dist/css/bootstrap.css'

import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import CustomLayout from './Containers/Layout';


{/*<Article article={articles[0]} />*/
}




class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <CustomLayout>
                        <BaseRouter/>
                    </CustomLayout>
                </Router>
            </div>
        );
    }
}

export default App;

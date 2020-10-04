import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import Menu from './components/Navigation/Navigation'
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation/>
                    {this.showContentMenus(routes)}
                    <Footer/>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;

import React, { Component } from 'react';
import '../css/App.css';

import Navigation from '../components/navigation.js';
import Login from '../components/login.js';
import Portfolio from '../components/portfolio.js';

class App extends Component {

    state = {
        login: false,
        loggedIn: false
    };

    toLogin = (e) => {
        e.preventDefault();
        this.setState({
           login: true
        });
    };

    userLoggedIn = () => {
        this.setState({
            loggedIn: true,
        });
    };

    render() {
        return (
            <div className="App">

                <Navigation login={this.toLogin} />

                {this.state.login ?
                    <Login loginCallback={this.userLoggedIn} />
                    :
                    <Portfolio />
                }

            </div>
        );
    }
}

export default App;

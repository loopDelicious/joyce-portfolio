import React, {Component} from 'react';

class ToggleCat extends Component {

    state = {
        collapse: true
    };

    handleToggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    };

    render() {
        return (
            <div className="data-toggle">
                <a onClick={this.handleToggle.bind(this)}>+ Read more</a>
                { !this.state.collapse ?
                    <div className="catUrl">
                        <p className="lead">Using a random selection of cat verbs, cat nouns, and cat emojis, create your own
                            unique URL.</p>
                        <p className="lead">PostgreSQL, SQLAlchemy, Redis, Python, Flask, JavaScript, JQuery, Ajax, HTML5, CSS3,
                            Clipboard.JS, Heroku</p>
                        <div className="list-group">
                            <a className="list-group-item" href="https://github.com/loopDelicious/cat-url-mangler"><i class="fa fa-github fa-fw" aria-hidden="true"></i>&nbsp; GitHub</a>
                            <a className="list-group-item" href="https://caturl.herokuapp.com/"><i className="fa fa-paw fa-fw" aria-hidden="true"></i>&nbsp; Check it out, meow</a>
                        </div>
                    </div>
                    : null }
            </div>
        )
    }
};

export default ToggleCat;




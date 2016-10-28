import React, {Component} from 'react';

class ToggleHacker extends Component {

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
                    <div className="hackerrank">
                        <p className="lead">Developed as a data illustration for a Medium blog post, and deployed on Digital Ocean using Nginx.</p>
                        <p className="lead">JavaScript, HTML5, Chart.js, Nginx, CloudFlare, Digital Ocean</p>
                        <div className="list-group">
                            <a className="list-group-item" href="https://github.com/loopDelicious/dataviz"><i class="fa fa-github fa-fw" aria-hidden="true"></i>&nbsp; GitHub</a>
                            <a className="list-group-item" href="https://medium.com/@joycelin.codes/30-days-of-coding-56f4e6c72aa2#.de9wrhwss"><i class="fa fa-medium fa-fw" aria-hidden="true"></i>&nbsp; Medium blog</a>
                            <a className="list-group-item" href="http://192.241.206.83/"><i className="fa fa-bar-chart-o fa-fw" aria-hidden="true"></i>&nbsp; Check it out</a>
                        </div>
                    </div>
                    : null }
            </div>
        )
    }
};

export default ToggleHacker;

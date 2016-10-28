import React, {Component} from 'react';

class ToggleNitrous extends Component {

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
                    <div className="nitrous">
                        <p className="lead">Sole developer to re-architect and build a new website, consolidating content from four existing subdomains into one.</p>
                        <p className="lead">Developed React components for navigation and Sign Up user experience.  </p>
                        <p className="lead">React, Node.js, JavaScript, Jade/Pug, Bootstrap, HTML5, SASS</p>
                    </div>
                    : null }
            </div>
        )
    }
};

export default ToggleNitrous;

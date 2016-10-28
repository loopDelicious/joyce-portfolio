import React, {Component} from 'react';

class ToggleMain extends Component {

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
                <div className="additional-info" >
                    <p className="lead">I'm a chameleon, and I can do anything that I've set my mind to, so far! I've done
                        operations, business, product and marketing.</p>
                    <p className="lead">Being a programmer, there is always something new to learn, and the rapid
                        pace of change keeps things fresh.</p>
                    <h3>Other interests</h3>
                    <p className="lead">Interested in health and wellness, travel and technology.</p>
                    <p className="lead">National Exercise & Sports Trainers Association (NESTA) certified sport yoga, indoor
                        cycling, and bootcamp
                        instructor.</p>
                    <div className="list-group">
                        <a className="list-group-item" href="https://medium.com/@joycelin.codes"><i className="fa fa-medium fa-fw" aria-hidden="true"></i>&nbsp; I have things to say about coding and tech.</a>
                    </div>
                </div>
                : null }
            </div>
        )
    }
};

export default ToggleMain;


import React, {Component} from 'react';

class ToggleLights extends Component {

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
                    <div className="lights">
                        <p className="lead">Developed in 24 hours for the Outside Hacks hackathon, we set out to build something
                            that enhances the experience for Artists and/or Fans at Outside Lands music festival.</p>
                        <p className="lead">Using web sockets, DJ's can interact with the audience, pushing changes in
                            background color and animations based on GPS location of the audience member's phone.</p>
                        <p className="lead">Node.js, HTML5, socket.io, React, jQuery, Webpack</p>
                        <div className="list-group">
                            <a className="list-group-item" href="https://github.com/loopDelicious/outsidehacks"><i className="fa fa-github fa-fw" aria-hidden="true"></i>&nbsp; GitHub</a>
                        </div>
                    </div>
                    : null }
            </div>
        )
    }
};

export default ToggleLights;


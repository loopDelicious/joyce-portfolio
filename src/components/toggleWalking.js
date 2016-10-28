import React, {Component} from 'react';

class ToggleWalking extends Component {

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
                    <div className="walking">
                        <p className="lead">Integration with the Mapbox and Google Maps API's allows users to plan the optimal
                            walking routes to visit local parks and public art works.</p>
                        <p className="lead">Using machine learning and other user's reviews, Christopher Walken recommends other
                            landmarks within proximity of your planned route.</p>
                        <p className="lead">PostgreSQL, SQLAlchemy, Python, Flask, JavaScript, JQuery, Ajax, Bootstrap, HTML5,
                            CSS3</p>
                        <p className="lead">Leaflet, Mapbox.js, Mapbox Directions, Mapbox Geocoding, Google Maps Distance
                            Matrix, Google Maps Streetview, Imgur photo upload</p>
                        <div className="list-group">
                            <a className="list-group-item" href="https://github.com/loopDelicious/walking"><i className="fa fa-github fa-fw" aria-hidden="true"></i>&nbsp; GitHub</a>
                            <a className="list-group-item" href="https://www.youtube.com/watch?v=T7kwK7rYwOY"><i className="fa fa-youtube-play fa-fw" aria-hidden="true"></i>&nbsp; YouTube demo</a>
                        </div>
                    </div>
                    : null }
            </div>
        )
    }
};

export default ToggleWalking;

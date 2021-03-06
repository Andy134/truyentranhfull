import React, { Component } from 'react';
import './Loading.css'

class Loading extends Component {

    render() {
        var { loading } = this.props;
        return (
            <div className="col-md-8">
                <div className={`loading ${(loading) ? '' : 'hidden'}`}>
                    <img className="loading-image" src={process.env.PUBLIC_URL + '/img/loading.gif'} />
                </div>
            </div>
        );
    }

}

export default Loading;

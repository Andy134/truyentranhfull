import React, { Component } from 'react';
import './Loading.css'

class Loading extends Component {

    render() {
        return (
            <div className={`loading`}>
                <img className="loading-image" src={process.env.PUBLIC_URL + '/img/loading.gif'}/>
            </div>
        );
    }

}

export default Loading;

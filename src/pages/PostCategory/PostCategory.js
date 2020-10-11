import React, { Component } from 'react';
import SidebarWidget from './../../components/SidebarWidget/SidebarWidget';
import Loading from './../../components/Loading/Loading';

class PostCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {(!this.state.loading) ?
                        <div className="col-md-8">
                            <div style={{ marginTop: '24px' }}></div>
                            <ul className="pagination justify-content-center mb-4">
                                <button type="button" className="btn btn-outline-secondary">&larr; Older</button>
                                &nbsp;
                                <button type="button" className="btn btn-outline-secondary">Newer &rarr;</button>
                            </ul>
                        </div>
                        :
                        <Loading loading={this.state.loading} />
                    }
                    <SidebarWidget />
                </div>
            </div>
        );
    }
}

export default PostCategory;

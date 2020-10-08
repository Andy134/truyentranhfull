import React, { Component } from 'react';
import SidebarWidget from './../../components/SidebarWidget/SidebarWidget';
import { connect } from 'react-redux';
import { actFetchPostsRequest } from '../../actions/index';
import Loading from './../../components/Loading/Loading';
import SearchPost from './../../components/SearchPost/SearchPost';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.fetchPostsRequest();
        if (this.props.posts) {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        var { posts } = this.props;
        if (posts.length > 0) {
            var ListSearchItem = posts.map((post, index) => {
                return (<SearchPost post={post} key={index} />);
            })
        }
        return (
            <div className="container">
                <div className="row">
                    {(!this.state.loading) ?
                        <div className="col-md-8">
                            <h1 className="my-4">Search <small></small></h1>
                            <div className="row">
                                {ListSearchItem}
                            </div>
                            <ul className="pagination justify-content-center mb-4">
                                <button type="button" className="btn btn-outline-secondary">&larr; Older</button>
                                &nbsp;
                                <button type="button" className="btn btn-outline-secondary">Newer &rarr;</button>
                            </ul>
                        </div>
                        :
                        ''}
                    <SidebarWidget location={this.props.location} isSearch={true}/>
                </div>
                <Loading loading={this.state.loading} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsRequest: () => {
            dispatch(actFetchPostsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

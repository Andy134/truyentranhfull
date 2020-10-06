import React, { Component } from 'react';
import BlogPost from './../../components/BlogPost/BlogPost';
import SidebarWidget from './../../components/SidebarWidget/SidebarWidget';
import { connect } from 'react-redux';
import { actFetchPostsRequest } from '../../actions/index';
import Loading from './../../components/Loading/Loading';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
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
            var ListBlogPost = posts.map((post, index) => {
                return (<BlogPost post={post} key={index} />);
            })
        }
        return (
            // <!-- Page Content -->
            <div className="container">
                {(!this.state.loading) ?
                    <div className="row">
                        {/* <!-- Blog Entries Column--> */}
                        <div className="col-md-8">
                            <h1 className="my-4">Homepage <small>Secondary Text</small></h1>
                            {ListBlogPost}
                            {/* <!-- Pagination --> */}
                            <ul className="pagination justify-content-center mb-4">
                                <button type="button" className="btn btn-outline-secondary">&larr; Older</button>
                                &nbsp;
                                <button type="button" className="btn btn-outline-secondary">Newer &rarr;</button>
                            </ul>
                        </div>
                        {/* <!-- Sidebar Widgets Column --> */}
                        <SidebarWidget />
                    </div>
                    :
                    <Loading loading={this.state.loading} />
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { Component } from 'react';
import moment from 'moment'
import './SearchPost.css'
import { Link, Redirect } from 'react-router-dom';

class BlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    showDetailAction = () => {
        this.setState({ redirect: true });
    }

    render() {
        var { post } = this.props;

        if (this.state.redirect) {
            return <Redirect push to={`/post/${post.post_id}`} />;
        }

        return (
            <div className="col-md-12">
                <div className="card mb-4">
                    <div className="row p-1" >
                        <div className="col-md-4">
                            <img className="img-top" style={{ width: '100%', height: '100%' }} src={post.img} alt="Card image cap" onClick={this.showDetailAction} />
                        </div>
                        <div className="col-md-8">
                            <h4 className="title" onClick={this.showDetailAction}>{post.title}</h4>
                            <p className="desc" onClick={this.showDetailAction}>{post.desc}</p>
                            <div className="text-muted mt-1">
                                Posted on {moment(post.create_date).format('DD-MM-YYYY')} by <a href="#">Start Bootstrap</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPost;

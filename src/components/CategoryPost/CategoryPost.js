import React, { Component } from 'react';
import moment from 'moment'
import './CategoryPost.css'
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
            <div className="col-md-6">
                <div className="card mb-4">
                    {/* <!-- Blog Post --> */}
                    <img className="card-img-top" src={post.img} alt="Card image cap" onClick={this.showDetailAction} />
                    <div className="card-body">
                        <h2 className="card-title" onClick={this.showDetailAction}>{post.title}</h2>
                        <p className="card-text">{post.desc}</p>
                        {/* <a href="#" className="btn btn-primary">Read More &rarr;</a> */}
                        <Link to={`/post/${post.post_id}`} className="btn btn-secondary">Read More &rarr;</Link>
                    </div>
                    <div className="card-footer text-muted">
                        Posted on {moment(post.create_date).format('DD-MM-YYYY')} by <a href="#">Start Bootstrap</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPost;

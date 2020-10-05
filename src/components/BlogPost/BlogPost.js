import React, { Component } from 'react';
import moment from 'moment'
// import style from './BlogPost.css'
import { Link } from 'react-router-dom';

class BlogPost extends Component {
    render() {
        var {post} = this.props;
        return (
            <div className="card mb-4">
                {/* <!-- Blog Post --> */}
                <img className="card-img-top" src={post.img} alt="Card image cap" />
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.desc}</p>
                    {/* <a href="#" className="btn btn-primary">Read More &rarr;</a> */}
                    <Link to={`/post/${post.post_id}`} className="btn btn-secondary">Read More &rarr;</Link>
                </div>
                <div className="card-footer text-muted">
                    Posted on {moment(post.create_date).format('DD-MM-YYYY')} by <a href="#">Start Bootstrap</a>
                </div>
            </div>
        );
    }
}

export default BlogPost;

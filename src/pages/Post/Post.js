import React, { Component } from 'react';
import SidebarWidget from './../../components/SidebarWidget/SidebarWidget';
import { connect } from 'react-redux';
import { actGetPostRequest } from '../../actions/index';

class Post extends Component {

    componentDidMount() {
        var { match } = this.props;
        if (match) { // update
            var id = match.params.id;
            this.props.getPostRequest(id);

        }
    }

    render() {
        var { post } = this.props;
        return (
            <div className="container">

                <div className="row">

                    {/* <!-- Post Content Column --> */}
                    <div className="col-lg-8">

                        {/* <!-- Title --> */}
                        <h1 className="mt-4">{post.title}</h1>

                        {/* <!-- Author --> */}
                        <p className="lead">
                            by <a href="#">Start Bootstrap</a>
                        </p>

                        <hr />

                        {/* <!-- Date/Time --> */}
                        <p>Posted on January 1, 2019 at 12:00 PM</p>

                        <hr />

                        {/* <!-- Preview Image --> */}
                        <img className="img-fluid rounded" src="https://i.pinimg.com/originals/0d/66/b5/0d66b5a74d9d1e08b5656a8a1e84d6d6.jpg" alt="" />

                        <hr />

                        {/* <!-- Post Content --> */}
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

                        <blockquote className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in
            <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

                        <hr />

                        {/* <!-- Comments Form --> */}
                        <div className="card my-4">
                            <h5 className="card-header">Leave a Comment:</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                        {/* <!-- Single Comment --> */}
                        <div className="media mb-4">
                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                            <div className="media-body">
                                <h5 className="mt-0">Commenter Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
                        </div>

                        {/* <!-- Comment with nested comments --> */}
                        <div className="media mb-4">
                            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                            <div className="media-body">
                                <h5 className="mt-0">Commenter Name</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

            <div className="media mt-4">
                                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
                                </div>

                                <div className="media mt-4">
                                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                                    <div className="media-body">
                                        <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* <!-- Sidebar Widgets Column --> */}
                    <SidebarWidget></SidebarWidget>

                </div>
                {/* <!-- /.row --> */}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPostRequest: (id) => {
            dispatch(actGetPostRequest(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);

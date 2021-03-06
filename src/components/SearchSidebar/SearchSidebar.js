import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCategoryRequest } from '../../actions/index';
import { Redirect } from 'react-router-dom';

class SearchSidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchKey: '',
            searchProcess: false
        };
    }

    componentDidMount() {
        this.props.fetchCategoryRequest();
    }

    handleSearchKey = (e) =>{
        var target = e.target;
        var value = target.value;
        this.setState({
            searchKey : value
        })
    }

    handleSearchSubmit=()=>{
        // window.location.href = '/search?key='+ this.state.searchKey
        this.setState({
            searchProcess : true
        })
    }


    render() {

        if (this.state.searchProcess) {
            return <Redirect push to={`/search?key=${this.state.searchKey}`} />;
        }

        var { category } = this.props;
        if (category && category.length > 0) {
            var ListCategory = category.map((cat, index) => {
                return (
                    <div key={index} className="col-lg-6">
                        <div className="list-unstyled mb-0">
                            <li>
                                <a href={`/category/${cat.category_id}`}>{cat.name.toUpperCase()}</a>
                            </li>
                        </div>
                    </div>
                );
            })
        }
        return (
            // <!-- Sidebar Widgets Column -->
            <div className="col-md-4">

                {/* <!-- Search Widget --> */}
                <div className="card my-4">
                    <h5 className="card-header text-white bg-dark">Search</h5>
                    <div className="card-body">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." value={this.state.searchKey} onChange={this.handleSearchKey} />
                            <span className="input-group-append">
                                <button className="btn btn-secondary" type="button" onClick={this.handleSearchSubmit}>Go!</button>
                            </span>
                        </div>
                    </div>
                </div>

                {/* <!-- Categories Widget --> */}
                <div className="card my-4">
                    <h5 className="card-header text-white bg-dark">Categories</h5>
                    <div className="card-body">
                        <div className="row">
                            {ListCategory}
                        </div>
                    </div>
                </div>

                {/* <!-- Side Widget --> */}
                <div className="card my-4">
                    <h5 className="card-header text-white bg-dark">Side Widget</h5>
                    <div className="card-body">
                        You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategoryRequest: () => {
            dispatch(actFetchCategoryRequest());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchSidebar);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchCategoryRequest } from '../../actions/index';
import { Link, withRouter } from 'react-router-dom';
import base64 from 'base-64';
import queryString from 'query-string';

class SidebarWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchKey: ''
        };
    }

    _getparseDecode() {
        var {pathname, search} =  this.props.location;
        var parse = queryString.parse(search)
        if (pathname==='/search' && parse.key) {
            var parseDecode = base64.decode(parse.key);
        }
        return parseDecode;
    }

    componentDidMount() {
        this.setState({
            searchKey: this._getparseDecode()
        });
        this.props.actFetchCategoryRequest();
    }

    handleSearchKey = (e) => {
        var target = e.target;
        var value = target.value;
        this.setState({
            searchKey: value
        })
    }

    handleSearchSubmit = () => {
        this.props.history.push(`/search?key=${base64.encode(this.state.searchKey)}`);
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.history.push(`/search?key=${base64.encode(this.state.searchKey)}`);
        }
    }

    render() {
        var { category } = this.props;
        if (category && category.length > 0) {
            var ListCategory = category.map((cat, index) => {
                return (
                    <div key={index} className="col-lg-6">
                        <div className="list-unstyled mb-0">
                            <li>
                                <Link to={`/category/${cat.category_id}`}>{cat.name.toUpperCase()}</Link>
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
                            <input type="text" className="form-control" placeholder="Search for..."
                                value={this.state.searchKey}
                                onChange={this.handleSearchKey}
                                onKeyDown={this.handleKeyDown}
                            />
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
        actFetchCategoryRequest: () => {
            dispatch(actFetchCategoryRequest());
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarWidget));

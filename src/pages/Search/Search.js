import React, { Component } from 'react';
import SidebarWidget from './../../components/SidebarWidget/SidebarWidget';
import { connect } from 'react-redux';
import { actFetchSearchPostRequest } from '../../actions/index';
import Loading from './../../components/Loading/Loading';
import SearchPost from './../../components/SearchPost/SearchPost';
import base64 from 'base-64';
import queryString from 'query-string';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            key: ''
        };
    }

    componentDidMount() {
        this.props.actFetchSearchPostRequest(this._getparseDecode());
        if (this.props.posts) {
            this.setState({
                loading: false,
            })
        }
    }

    componentDidUpdate(preProps) {
        if (preProps.location != this.props.location) {
            this.props.actFetchSearchPostRequest(this._getparseDecode());
        }
    }

    _getparseDecode(){
        var parse = queryString.parse(this.props.location.search)
        var parseDecode = base64.decode(parse.key);
        this.setState({
            key: parseDecode
        })
        return parseDecode;
    }

    render() {
        var { posts } = this.props;
        if (posts.length > 0) {
            var ListSearchItem = posts.map((post, index) => {
                return (<SearchPost post={post} key={index} />);
            })
        }
    var searchKeyTitle = (<h1 className="my-4">Search: <small style={{color: 'tomato'}} >{this.state.key}</small></h1>)
        return (
            <div className="container">
                <div className="row">
                    {(!this.state.loading) ?
                        <div className="col-md-8">
                            {(this.props.posts.length > 0)
                                ?
                                <div id="haveData">
                                    {searchKeyTitle}
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
                                <div id="haveData">
                                    {searchKeyTitle}
                                    <p className="text-muted">No data found</p>
                                </div>
                            }

                        </div>
                        :
                        ''}
                    <SidebarWidget/>
                </div>
                <Loading loading={this.state.loading} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.searchPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actFetchSearchPostRequest: (key) => {
            dispatch(actFetchSearchPostRequest(key));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

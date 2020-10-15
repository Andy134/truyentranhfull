import React, { Component } from 'react';
import SidebarWidget from './../../components/SidebarWidget/SidebarWidget';
import Loading from './../../components/Loading/Loading';
import { connect } from 'react-redux';
import { actFetchPostsByCategoryRequest } from '../../actions/index';
import CategoryPost from './../../components/CategoryPost/CategoryPost'

class PostCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        console.log('did mount')
        var { match } = this.props
        if (match) {
            this.props.actFetchPostsByCategory(match.params.id);
            if (this.props.postCategory) {
                this.setState({
                    loading: false
                })
            }
        }
    }

    componentDidUpdate(preProps) {
        if(preProps.match != this.props.match){
            this.setState({
                loading: true
            },()=> this.props.actFetchPostsByCategory(this.props.match.params.id))
        }
        if(preProps.postCategory != this.props.postCategory){
            this.setState({
                loading: false
            })
        }
    }

    render() {
        if (this.props.postCategory && this.props.postCategory.length > 0) {
            var ListPost = this.props.postCategory.map((post, index) => {
                return <CategoryPost post={post} key={index} />
            })
        }
        else{
            var ListPost = <p>No data found</p>;
        }

        return (
            <div className="container">
                <div className="row">
                    {(!this.state.loading) ?
                        <div className="col-md-8">
                            <div className="row" style={{ marginTop: '24px' }}>
                                {ListPost}
                            </div>
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

const mapStateToProps = state => {
    return {
        postCategory: state.postCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actFetchPostsByCategory: (id) => {
            dispatch(actFetchPostsByCategoryRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCategory);

import React, { Component } from 'react';
import SidebarWidget from './../../components/SidebarWidget/SidebarWidget';
import { actFetchCategoryRequest } from '../../actions/index';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';

class Category extends Component {

    render() {
        var { category } = this.props;
        if (category && category.length > 0) {
            var listCategory = category.map((cat, index) => {
                return (
                    <CategoryItem key={index} category={cat}/>
                );
            });
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="my-4">Category <small></small></h1>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <img className="img-fluid rounded" src="https://i.pinimg.com/originals/0d/66/b5/0d66b5a74d9d1e08b5656a8a1e84d6d6.jpg" alt="" />
                            </div>
                            {listCategory}
                        </div>
                    </div>
                    <SidebarWidget />
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);

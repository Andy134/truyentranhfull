import React, { Component } from 'react';
import SidebarWidget from './../../components/SidebarWidget/SidebarWidget';
import CategoryItem from './CategoryItem';

class Category extends Component {

    render() {
        var listCategory = (
            <div className="row">
                <div className="col-md-12 mb-3">
                    <img className="img-fluid rounded" src="https://i.pinimg.com/originals/0d/66/b5/0d66b5a74d9d1e08b5656a8a1e84d6d6.jpg" alt="" />
                </div>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="my-4">Category <small></small></h1>
                        {listCategory}
                    </div>
                    <SidebarWidget />
                </div>
            </div>
        );
    }
}

export default Category;

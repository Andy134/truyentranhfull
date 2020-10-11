import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryItem extends Component {

    render() {
        var { category } = this.props;
        return (
            <div className="col-md-6">
                <Link as="h1" to={`/category/${category.category_id}`}>{category.name.toUpperCase()}</Link>
                <p>
                    {category.description}
                </p>
                <p>
                    <Link className="btn btn-secondary" to={`/category/${category.category_id}`}>View details »</Link>
                </p>
            </div>
        );
    }
}

export default CategoryItem;

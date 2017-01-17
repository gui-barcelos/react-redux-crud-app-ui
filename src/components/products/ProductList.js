import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProdutListItem from './ProductListItem';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const products = this.props.products;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1> Product </h1>
                    {" "}

                    <Link className="btn btn-primary" to="/product">
                        New
                    </Link>
                </div>
                <div className="panel-body">
                    <div className="col-md-12">
                        <table className="table stripped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((p) => {
                                    return <ProdutListItem key={p._id} product={p} onDeleteProduct={this.props.onDeleteProduct} />;
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onDeleteProduct: PropTypes.func.isRequired
};

export default ProductList;

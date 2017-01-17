import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class ProductListItem extends React.Component {
    render() {
        const product = this.props.product;
        const handleDelete = () => this.props.onDeleteProduct(product._id);

        return (
            <tr>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                    <Link className="btn btn-primary" to={'/product/' + product._id}>
                        Edit
                    </Link>
                    {" "}
                    <Link className="btn btn-danger" onClick={handleDelete}>
                        Delete
                    </Link>
                </td>
            </tr>
        );
    }
}

ProductListItem.propTypes = {
    product: PropTypes.object.isRequired,
    onDeleteProduct: PropTypes.func.isRequired
};

export default ProductListItem;

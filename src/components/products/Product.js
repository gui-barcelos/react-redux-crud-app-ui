import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1> {this.props.new ? 'New' : 'Edit'} Product </h1>
                </div>
                <div className="panel-body">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                name="name"
                                type="TextInput"
                                value={this.props.product.name}
                                className="form-control"
                                onChange={this.props.onChange} />

                        </div>
                        <div className="form-group">
                            <label>Description:</label>

                            <input
                                type="TextInput"
                                name="description"
                                value={this.props.product.description}
                                className="form-control"
                                onChange={this.props.onChange} />

                        </div>
                        <div className="form-group">
                            <label>Price:</label>

                            <input
                                name="price"
                                type="TextInput"
                                value={this.props.product.price}
                                className="form-control"
                                onChange={this.props.onChange} />
                        </div>

                        <button disabled={this.props.saving} className="btn btn-primary" onClick={this.props.onSaveProduct}>{this.props.saving ? 'Saving...' : 'Save'} </button>
                    </div>
                </div>
            </div>

        );
    }
}

Product.propTypes = {
    onSaveProduct: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    saving: PropTypes.bool,
    new: PropTypes.bool.isRequired
};

export default Product;

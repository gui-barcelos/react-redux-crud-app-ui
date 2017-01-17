import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from './Product';
import * as actions from '../../actions/products/productActions';

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            newProduct: this.props.params.productId ? false : true,
            product: this.props.params.productId ? Object.assign({}, this.props.products.find(p => p._id == this.props.params.productId)) :
                { _id: '', name: '', description: '', price: '' },
            saving: false
        };
    }

    handleSave(event) {
        event.preventDefault();

        if (this.state.newProduct) {
            this.props.actions.insertProduct(this.state.product);
        } else {
            this.props.actions.updateProduct(this.state.product);
        }
    }

    handleChange(event) {
        const field = event.target.name;
        const product = this.state.product;
        product[field] = event.target.value;
        return this.setState({ product: product });
    }

    render() {
        return (
            <Product product={this.state.product} onSaveProduct={this.handleSave} onChange={this.handleChange} new={this.state.newProduct} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
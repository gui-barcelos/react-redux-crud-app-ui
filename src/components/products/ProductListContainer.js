import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductList from './ProductList';
import * as actions from '../../actions/products/productActions';

class ProductListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    componentWillMount() {
         this.props.actions.listProducts();
    }

    handleRemove(id) {
        if(confirm(`Confirm deleting Product #${id}?`)) {
            this.props.actions.deleteProduct(id);
        }
    }

    render() {
        return (
            <ProductList products={this.props.products} onDeleteProduct={this.handleRemove} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
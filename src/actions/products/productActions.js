import * as types from '../actionTypes';
import api from '../../api/ProductsApi';
import { browserHistory } from 'react-router';

export const listProductsSuccess = (products) => {
    return { type: types.LIST_PRODUCTS_SUCCESS, products }
};

export const insertProductSuccess = (product) => {
    return { type: types.INSERT_PRODUCT_SUCCESS, product }
};


export const updateProductSuccess = (product) => {
    return { type: types.UPDATE_PRODUCT_SUCCESS, product }
};


export const deleteProductSuccess = (idProduct) => {
    return { type: types.DELETE_PRODUCT_SUCCESS, idProduct }
};


export const listProducts = () => {
    return (dispatch) => api.getAllProducts()
        .then((response) => {
            dispatch(listProductsSuccess(response.data));
        }).catch((error) => {
            throw (error);
        })
};

export const insertProduct = (product) => {
    return (dispatch) => api.insertProduct(product)
        .then((response) => {
            if (response.status === 200) {
                browserHistory.push('/products');

                dispatch(insertProductSuccess(product));
            } else {
                throw ('Unexptecded error.')
            }
        }).catch((error) => {
            throw (error);
        })
};


export const updateProduct = (product) => {
    return (dispatch) => api.updateProduct(product)
        .then((response) => {
            if (response.status === 200) {
                browserHistory.push('/products');

                dispatch(updateProductSuccess(product));
            } else {
                throw ('Unexptecded error.')
            }
        }).catch((error) => {
            throw (error);
        })
};

export const deleteProduct = (idProduct) => {
    return (dispatch) => api.deleteProduct(idProduct)
        .then((response) => {
            if (response.status === 204) {
                dispatch(deleteProductSuccess(idProduct));
            } else {
                throw ('Unexptecded error.')
            }
        }).catch((error) => {
            throw (error);
        })
};
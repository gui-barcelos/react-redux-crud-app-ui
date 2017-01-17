import * as types from '../actions/actionTypes';
const initialState = {
    products: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_PRODUCTS_SUCCESS:
            return Object.assign({}, state, { products: action.products });
        case types.INSERT_PRODUCT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.product)
            ];
        case types.UPDATE_PRODUCT_SUCCESS:
            return [
                ...state.filter(p => p._id !== action._id),
                Object.assign({}, action.product)
            ];
        case types.DELETE_PRODUCT_SUCCESS:
            var newState = Object.assign([], state);
            var indexToDelete = state.products.findIndex(p => p.id == action.idProduct);
            newState.splice(indexToDelete, 1);

            return newState;
        default:
            return state;
    }
};

export default productReducer;
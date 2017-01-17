import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ProductListContainer from './components/products/ProductListContainer';
import ProductContainer from './components/products/ProductContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/products" component={ProductListContainer} />
        <Route path="/product" component={ProductContainer} />
        <Route path="/product/:productId" component={ProductContainer} />
    </Route>
);
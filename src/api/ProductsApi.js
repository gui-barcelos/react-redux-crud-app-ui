import axios from 'axios';

class ProductsAPI {
    static getAllProducts() {
        return axios.get(`${process.env.API_HOST}/products`);
    }

    static deleteProduct(id) {
        return axios.delete(`${process.env.API_HOST}/products/${id}`);
    }

    static insertProduct(product) {
        return axios.post(`${process.env.API_HOST}/products/`, product);
    }

    static updateProduct(product) {
        return axios.put(`${process.env.API_HOST}/products/${product._id}`, product);
    }
}

export default ProductsAPI;
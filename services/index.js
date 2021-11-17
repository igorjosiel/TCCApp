import { http } from './config';

const textUrl = "/products";

export const listProducts = async (value, typeSearch) => {
    const { data } = await http.get(`/products?${typeSearch}=${value}`);
    
    return {
        data: data.data,
        message: data.message,
        pagination: data.pagination
    }
}

export const getOneProduct = async (id) => {
    const { data } = await http.get(`/products/${id}`);
    
    return {
        data: data.data,
        message: data.message
    }
}
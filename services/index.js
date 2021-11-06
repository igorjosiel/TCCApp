import { http } from './config';

const textUrl = "/products";

export const listProducts = async (filter) => {
    if (filter === undefined) {
        const { data } = await http.get('/products');
        
        return {
            data: data.data,
            message: data.message,
            pagination: data.pagination
        }
    }
    else {
        const { name, cpf, ra } = filter;

        return http.get(`${textUrl}/?name=${name}&cpf=${cpf}&ra=${ra}`);
    }
}

// export const createStudent = (params) => {
//     return http.post(`${textUrl}`, params);
// }

// export const deleteStudent = (id) => {
//     return http.delete(`${textUrl}/${id}`);
// }

// export const updateStudent = (id, params) => {
//     return http.put(`${textUrl}/${id}`, params);
// }
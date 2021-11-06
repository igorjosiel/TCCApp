import { http } from './config';

const textUrl = "/products";

export const listProducts = (filter) => {
    if (filter === undefined) return http.get('/products');
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
// export const getProduct = (callback) => {
//     fetch("", {
//         method: "get",
//         mode: "no-cors",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         }
//     }).then(res => res.json())
//         .then(
//             (result) => {
//                 console.log("Res: ", result)
//                 if(callback) {
//                     callback(result)
//                 }
//             }
//         );
// }

const endpoint = 'http://localhost:1001/products';

export const async getProducts = () => fetch(endpoint, {
method: 'GET',
mode: 'no-cors',
headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":"*",
            }
})
.then((resp) => resp.json())
.then(function(response) {
console.info('fetch()', response);
return response;
})
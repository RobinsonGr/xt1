const URL = 'http://localhost:3000'

function getProducts(categoryID) {
    //Retrieveing the product list throughtout the classical method  of chaning 'then'
   return fetch(`${URL}/products/${categoryID}`)
    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};

export {getProducts};
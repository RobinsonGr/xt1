const URL = 'http://localhost:3000'


function getCategoriesAPI () {
    return fetch(`${URL}/categories`)
        .then(response => response.json())
        .then(data => data)
    };

function getProducts(categoryURL) {
    //Retrieveing the product list by category
   return fetch(`${URL}/products/${categoryURL}`)

    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};

function editedProductAPI(editedProduct) {
    //Retrieveing the product list by category
   return fetch(`${URL}/products/${categoryURL}`,
    {
    method: 'PUT',
    body: JSON.stringify(editedProduct)    
    })
    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};

function getProductsbyCategoryId(categoryId) {
    //Retrieveing the product list by category
   return fetch(`${URL}/products/bycategoryid/${categoryId}`)

    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};

function registerUser (FormData) {

    return fetch(`${URL}/user/register`, {
        method: 'POST',
       // headers: 'Content-Type': 'multipart/form-data,
       //this wont send images or complex files, so the brower will set it as  multipart/form ..., instead of
       //url encoded. In server i got to use multer when a formData is received to parse it.
        body: FormData
    })
    .then(response => response.json())
    .then(message => {
        console.log(message)
        return message
    })
};

function getAuthValidation () {
    //a boolean is expected wrapped inside an obj
    return fetch(`${URL}/user/me`, {
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
};

function submitLoginAPI(userData) {
   
    return fetch(`${URL}/user/login`, {
        method: 'POST',
        credentials: "include",
        headers: {
           // Accept: "application/json",
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(userData)
      })
      .then(responseRaw => {
        return responseRaw.json()
      })
      .then(response => response);      
};

function editUserAPI(dataUpdated) {
    
    return fetch(`${URL}/user/edituser`, {
        method: 'PUT',
        body: JSON.stringify(dataUpdated)
    })
    .then(responseRaw => responseRaw.json())
    .then(response => response)
};

export {
    getProducts, 
    getCategoriesAPI, 
    getAuthValidation, 
    registerUser, 
    submitLoginAPI,
    editUserAPI,
    getProductsbyCategoryId,
    editedProductAPI
};
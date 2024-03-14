const URL = 'http://localhost:3000'
import axios from 'axios';

axios.defaults.withCredentials = true;


function getCategories () {
    return fetch(`${URL}/categories`)
        .then(response => response.json())
        .then(data => data)
    }

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


async function getAuthValidation() {
    try {
      const response = await axios.get(`${URL}/user/checkLogin`);
      return response.data; 
    } catch (error) {
      console.error("Error fetching validation:", error); 
      throw error; // Re-throw to allow for handling in the caller
    }
  }
  
  async function submitLoginAPI(userData) {
    try {
      const response = await axios.post(`${URL}/user/login`, userData, {
      
        headers: {
            Accept: "application/json",
          'Content-Type': 'application/json'
        }
      });
      return response.data; 
    } catch (error) {
      console.error("Error submitting login:", error);
      throw error; // Re-throw for external error handling
    }
  }



// function getAuthValidation () {
//     //a boolean is expected wrapped inside an obj
//     return fetch(`${URL}/user/checkLogin`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         return data
//     })
// };

// function submitLoginAPI(userData) {
   
//     return fetch(`${URL}/user/login`, {
//         method: 'POST',
//         credentials: "include",
//         headers: {
//            // Accept: "application/json",
//             //This case I got to set the header manually app/json because the backend could parse it well
//             'Content-Type': 'application/json' 
//         },
//         body: JSON.stringify(userData)
//       })
//       .then(responseRaw => {
//         return responseRaw.json()
//       })
//       .then(response => response);      
// };

export {getProducts, getCategories, getAuthValidation, registerUser, submitLoginAPI};
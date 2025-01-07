import axios from "axios"
const urlBase ="http://localhost:5050"

const url = `${urlBase}/availableproducts`
async function availableproducts () {
  const token= localStorage.getItem("usertoken")
    const response = await axios.post(url,{},{   //empty bracket to make it generate token
    headers: { "Authorization": `Bearer ${token}`
  
  },
            
        })

    console.log(response.data)
    return response.data    
}

const urls = `${urlBase}/availableproducts`
async function  producttag (tag) {
    const response = await axios.post(urls,{tag:tag})
    console.log(response.data)
    return response.data    
}

const url2 = `${urlBase}/view-product`
async function singleproduct  (id) {
    const response = await axios.post(url2,{productid:id})
    console.log(response.data)
    return response.data   }

    const signup = async (userData) => {
        try {
          const response = await axios.post(`${API_URL}/signup`, userData);
          return
           response.data;
        } catch (error) {
          throw error.response.data;
        }
      };

      // const login = async (credentials) => {
      //     try {
      //       const response = await axios.post(`${API_URL}/login`, credentials);
      //       return response.data;
      //     } catch (error) {
      //       throw error.response.data;
      //     }
      //   };


        async function cartlist(customerid) {

          try {
            const response = await axios.post(`${urlBase}/cart-list`, { customerID: customerid });
            console.log(response.data);
            
            return response.data;
          } catch (error) {

            console.error('Error fetching cart list:', error);

            return { result: [] }; // Return an empty cart if there's an error
          }
        }
        async function payment(customerid,totalPrice) {

          try {
            const response = await axios.post(`${urlBase}/pay`, { customerID: customerid,totalprice:totalPrice });
            console.log(response.data);
            
            return response;
          } catch (error) {

            console.error('Error fetching  :', error);

            return { result: [] }; // Return an empty cart if there's an error
          }
        }
        //    const response =await axios.post(`${urlBase}/cart-list`,{customerID:customerid})
        //    return response.data
          
        // }


export {
  signup,
  // login,
  payment,
producttag,
singleproduct,
    availableproducts,
    cartlist
}

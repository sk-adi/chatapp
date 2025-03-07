import axios from "axios";

const userRegister = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      user
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};



export { userRegister };


/*******************************************userLogin***************************************/

const userLogin = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      user
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { userLogin };


/*******************************************userLogin***************************************/

const userLogOut = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/logout");
    return response.data;
  } catch (error) {
    console.log(`Error in userLogout`, userLogOut);
  }
};

export { userLogOut };



/*******************************************userLogin***************************************/

const isLoggedIn=async(token)=>{
  try {
    const response=await axios.get('http://localhost:3000/api/auth/verify',
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    )
    return response.data
    
  } catch (error) {
    return error.response.data
    
  }

}


export { isLoggedIn }




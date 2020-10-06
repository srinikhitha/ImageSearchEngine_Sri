
import axios from "axios";

export const userRegistration = async () => {
  try {
    const response =  axios.post(
      "http://localhost:40507/api/UserProfile", 
      {
       
  
            User_ID: 0,
            User_Name: "sri",
            User_Email: "srinikita1.b@gmail.com",
            User_Mobile_No: "7573641309",
            User_Password: "123456",
            User_Status: "string"
           
        
        
      }
    );
    return response.data;
  } catch (error) {
    return null;
  }
};


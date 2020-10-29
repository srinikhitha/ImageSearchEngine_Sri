import axios from "axios";

export const userRegistration = async (data) => {
  console.log("data", data);
  try {
    const response = await axios.post(
      "http://localhost:40507/api/UserProfile",
      {
        User_ID: data.id,
        User_Name: data.name,
        User_Email: data.email,
        User_Mobile_No: data.phone,
        User_Password: data.password,
        User_Status: "string",
      }
    );
    return response.status;
  } catch (error) {
    return null;
  }
};

export const userLogin = async (data) => {
  console.log("data", data);
  try {
    const response = await axios.get(
      `http://localhost:40507/api/UserProfile?LoginId=${data.username}&Password=${data.password}`
    );

    console.log(response.status)
    return response.status;
  } catch (error) {
    return null;
  }
};

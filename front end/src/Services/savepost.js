import axios from "axios";

export const saveImage = async (data) => {
  console.log("data", data);
  try {
    const response = await axios.post(
      "https://localhost:44321/api/Images",
      {
        "ID": data.Id,
        "ImageId": data.ImageId,
        "Userid": data.UserId
      }
    );
    console.log("got",response)
    return response.status;
  } catch (error) {
    return null;
  }
};

export const getSaveImage = async (data) => {
  console.log("data", data);
  try {
    const response = await axios.get(
      "https://localhost:44321/api/Images?userId=" + data
    );
    console.log("saved",response)
    return response;
  } catch (error) {
    return null;
  }
};

export const deleteSaveImage = async (data) => {
  console.log("data", data);
  try {
    const response = await axios.delete(
      "https://localhost:44321/api/Images?ImageId=" + data
    );
    return response.status;
  } catch (error) {
    return null;
  }
};

import axios from "axios";
import nodemailer from "nodemailer";
export const confirmReset = async (toemail,  content) => {
    const credentials = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          // These environment variables will be pulled from the .env file
          user: process.env.MAIL_USER, 
          pass: process.env.MAIL_PASS  
        }
      }
    const contacts = {
        from: process.env.MAIL_USER,
        toemail
      }
    const transporter = nodemailer.createTransport(credentials)
    const email = Object.assign({}, content, contacts)
    await transporter.sendMail(email)
};

export const userReset = async (data) => {
    console.log("data", data);
    try {
      const response = await axios.put(
        `https://localhost:44321/api/UserProfile?EmailId=${data.username}&NewPassowrd=${data.newpassword}`
      );
  
      console.log(response.status)
      return response.status;
    } catch (error) {
      return null;
    }
  };
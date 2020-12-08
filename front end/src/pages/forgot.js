import React, { useState } from "react";

import { confirmReset, userReset } from "../Services/reset";
import PageLayout from "../layout/PageLayout";

import { useHistory } from "react-router-dom";

function Forgot(props) {
  const [username, setUsername] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enteredOtp == otp) {
      const status = await userReset({ username, newpassword });
      console.log("status", status);
      if (status === 200) {
        history.push("/Login");
      }
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setOtp("123456");
    await confirmReset(username, otp);
  };

  console.log("props", props);
  return (
    <PageLayout title="Forgot Password">
      <div className="wrapper1" style={{ top: "80px" }}>
        <form className="container" action method="GET">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />

          <input
            type="text"
            visible={otp != ""}
            onChange={(e) => setEnteredOtp(e.target.value)}
            placeholder="otp"
          />
          {otp && (
            <input
              type="password"
              visible={otp != ""}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="newpassword"
            />
          )}

          <button type="submit" visible={otp != ""} onClick={handleSendOtp}>
            Sent otp
          </button>

          <button type="submit" visible={otp != ""} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </PageLayout>
  );
}

export default Forgot;

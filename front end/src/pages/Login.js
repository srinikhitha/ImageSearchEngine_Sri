import React, { useState } from "react";
import { userLogin } from "../Services/registration";
import ReCAPTCHA from "react-google-recaptcha";
import PageLayout from "../layout/PageLayout";
import { Form, Input, Button, Checkbox } from "antd";

import { useHistory } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Login(props) {
  let history = useHistory();

  const onChangeRecaptcha = (value) => {
    console.log("Captcha value:", value);
  };

  const onFinish = async ({ username, password }) => {
    // console.log("Success:", values);
    const response = await userLogin({ username, password });
    console.log("response", response);
    if (response.status === 200) {
      localStorage.setItem("userId", response.data.User_ID)
      props.setIsLoggedIn(true);
      history.push("/Search");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <PageLayout title="Login">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        style={{ width: "400px" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          {...tailLayout}
          name="recaptcha"
          valuePropName="recaptcha"
          rules={[
            {
              required: true,
              message: "Please click recaptcha!",
            },
          ]}
        >
          <ReCAPTCHA
            sitekey="6LeoIOMZAAAAAALSqlRiTkZIdEFUQwz2ucNQpLx7"
            onChange={onChangeRecaptcha}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  );
}

export default Login;

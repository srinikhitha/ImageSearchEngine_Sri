import React, { Component } from "react";
import { userRegistration } from "../Services/registration";
import PageLayout from "../layout/PageLayout";
import ReCAPTCHA from "react-google-recaptcha";

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

const Signup = () => {
  let history = useHistory();

  const onChangeRecaptcha = (value) => {
    console.log("Captcha value:", value);
  };

  const onFinish = async ({ name, username, phone, password }) => {
    // console.log("Success:", values);
    const status = await userRegistration({
      id: 0,
      name,
      email: username,
      phone,
      password,
    });

    if (status === 200) {
      history.push("/Search");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <PageLayout title="Sign up">
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username/email"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username/email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone number!",
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

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
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
};

export default Signup;

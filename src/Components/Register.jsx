import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from 'axios';

const onFinish = async (values) => {
  console.log("Form values:", values); // Debugging

  try {
    const response = await axios.post("http://localhost:5000/Register", values);

    if (response.data.success) {
      message.success(response.data.message);
    } else {
      message.error(response.data.message);
    }
  } catch (error) {
    console.error("Registration Error:", error);
    message.error("Something went wrong. Try again!");
  }
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Register</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Register;

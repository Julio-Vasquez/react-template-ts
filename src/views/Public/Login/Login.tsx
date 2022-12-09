import { FC } from "react";
import { LoginDefaultProps, LoginProps, LoginPropTypes } from "./login.types";
import { Button, Checkbox, Form, Input } from "antd";

export const Login: FC<LoginProps> = ({ description }) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 6 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
        <h1>Login</h1>
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      wrapperCol={{ offset: 0, span: 8 }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        wrapperCol={{ offset: 0, span: 8 }}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 11, span: 5 }}
      >
        <a>Forgot password </a>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

Login.propTypes = LoginPropTypes;
Login.defaultProps = LoginDefaultProps;

export default Login;

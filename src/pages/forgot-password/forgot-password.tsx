import React from "react";
import { Button, Select, Form, Input } from "antd";
import DatePicker from "../../components/DataPicker";
import "./forgot-password.scss";

const ForgotPasswordScreen: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          form={form}
        >
          <Form.Item
            label="メールアドレス"
            name="username"
            rules={[
              {
                required: true,
                type: "email",
                message: "メールアドレスは必須です。",
              },
            ]}
          >
            <Input className="input" />
          </Form.Item>
          <DatePicker form={form} name={"dataOfBirth"} />
          <Form.Item>
            <div className="group-btn">
              <Button>ログイン</Button>
              <Button type="primary" htmlType="submit">
                ログイン
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;

import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../configs";

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const navigateToForgotPassword = () => {
    navigate(PATH_NAME.FORGOT_PASSWORD);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img className="img-logo" src="src/assets/images/icon-app.svg" />
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
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

          <Form.Item
            label="パスワード"
            name="password"
            rules={[{ required: true, message: "パスワードは必須です。" }]}
          >
            <Input.Password className="input" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>ログイン状態を保持する（再ログイン不要）</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              ログイン
            </Button>
          </Form.Item>
        </Form>
        <a
          onClick={() => {
            navigateToForgotPassword();
          }}
          className="reset-password"
        >
          パスワードを忘れた場合はこちら
        </a>
        <p className="text-unSignUp">会員登録がお済でない方</p>
        <p className="text-unSignUp-mobile">もしくは</p>
        <Button className="btn-signUp">会員登録</Button>
        <Button className="btn-goToHome" type="primary">
          ログインせずに商品を表示する
        </Button>
        <div className="btn-signUpMobile">
          アカウントがない方は
          <a> こちら</a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

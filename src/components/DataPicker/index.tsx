import React from "react";
import { Form, Select } from "antd";
import "./index.scss";

const data = [
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "disabled",
    label: "Disabled",
  },
  {
    value: "Yiminghe",
    label: "yiminghe",
  },
];

const DatePicker: React.FC = () => {
  return (
    <Form.Item
      label="パスワード"
      name="password"
      rules={[{ required: true, message: "パスワードは必須です。" }]}
    >
      <div className="date-picker-container">
        <Select
          defaultValue=""
          // onChange={handleChange}
          options={data}
          className="select-date"
        />
        <Select
          defaultValue=""
          // onChange={handleChange}
          options={data}
          className="select-date"
        />
        <Select
          defaultValue=""
          // onChange={handleChange}
          options={data}
          className="select-date"
        />
      </div>
    </Form.Item>
  );
};

export default DatePicker;

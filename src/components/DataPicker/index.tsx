import React, { useEffect, useState } from "react";
import { Form, FormInstance, Select, SelectProps } from "antd";
import "./index.scss";
import { daysInMonth, monthSelect, yearSelect } from "../../utils/const";

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

interface Props extends SelectProps {
  form?: FormInstance;
  name: string;
}

interface timeProps {
  year: string;
  month: string;
  day: string;
}

const DatePicker = (props: Props) => {
  const { form, name } = props;
  const [time, setTime] = useState<timeProps>({ year: "", month: "", day: "" });
  const { year, month, day } = time;
  const updateForm = () => {
    // form?.setFieldsValue({ [name]: 123123 });
  };

  const handleChange = (type: string, value: string) => {
    setTime((prev) => {
      return { ...prev, [type]: value };
    });
  };

  useEffect(() => {
    const resetDay = () => {
      if (Number(day) > daysInMonth(year, month).length) {
        handleChange("day", "");
      }
    };
    resetDay();
  }, [year, month]);

  useEffect(() => {
    form?.setFieldsValue({
      [name]: !day ? undefined : `${year}-${month}-${day}`,
    });
  }, [day]);

  return (
    <Form.Item
      label="パスワード"
      name={name}
      rules={[{ required: true, message: "パスワードは必須です。" }]}
    >
      <div className="date-picker-container">
        <Select
          onChange={(value) => handleChange("year", value)}
          options={yearSelect()}
          className="select-date"
          value={year}
        />
        <Select
          onChange={(value) => handleChange("month", value)}
          options={monthSelect()}
          className="select-date"
          value={month}
        />
        <Select
          onChange={(value) => handleChange("day", value)}
          options={daysInMonth(year, month)}
          className="select-date"
          disabled={!year || !month}
          value={day}
        />
      </div>
    </Form.Item>
  );
};

export default DatePicker;

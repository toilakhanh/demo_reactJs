import { Menu } from "antd";
import React from "react";

export default function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={new Array(13).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </div>
    </div>
  );
}

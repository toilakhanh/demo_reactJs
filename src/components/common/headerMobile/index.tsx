import React from "react";
import { useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../../configs";
import "./index.scss";

export default function HeaderMobile() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(PATH_NAME.ROOT);
  };

  return (
    <div className="header-mobile-container">
      <button onClick={onBack} className="btn-back">
        <img src="src/assets/images/arrow-left.svg" className="icon-back" />
      </button>
      <p className="header-title">パスワード再設定</p>
    </div>
  );
}

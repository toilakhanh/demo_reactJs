import React, { JSXElementConstructor } from "react";
import { Outlet } from "react-router-dom";
import HeaderMobile from "../../common/headerMobile";

function MobileLayout({ children }: any) {
  return (
    <div className="mobile-layout-container">
      <HeaderMobile />
      {children}
    </div>
  );
}

export default MobileLayout;

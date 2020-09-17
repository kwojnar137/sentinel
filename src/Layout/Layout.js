import React from "react";
import Header from "./Header";
import Content from "./Content";

import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <Content children={children}></Content>
    </div>
  );
}

export default Layout;

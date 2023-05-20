import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// global style for styled components
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: #323334;
  color: white;
}

`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>
);

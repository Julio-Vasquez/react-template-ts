import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import "./index.scss";
import reportWebVitals from './reportWebVitals';
import { Loading } from "./components/Loading/Loading";

const App = lazy(() => import("./views/App"));

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loading message="Loading" />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
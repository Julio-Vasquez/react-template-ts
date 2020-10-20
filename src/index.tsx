import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";
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

serviceWorker.register();

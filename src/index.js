import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/common/Loader";
import ColorContext from "./contexts/ColorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Provider store={store}>
        <BrowserRouter>
          <ColorContext>
            <App />
          </ColorContext>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

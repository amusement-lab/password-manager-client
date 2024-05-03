import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import "./index.css";
import { OpenAPI } from "./api/generated";

// TODO: Add Config the header request here, currently we need setup the authentication in header manually
// OpenAPI.HEADERS = {
//   Authorization: ``,
// };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

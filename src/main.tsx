import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import "./index.css";
import { OpenAPI } from "./api/generated";

// Config the header request
OpenAPI.HEADERS = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdTE1djI1ZzAwMDAxNGlyODEybHgyOWQiLCJ1c2VybmFtZSI6ImNyZXplbnRpYSIsImhhc2hlZEtleSI6IjE1ZTJiMGQzYzMzODkxZWJiMGYxZWY2MDllYzQxOTQyIiwiaWF0IjoxNzExOTcyNTY0fQ.HtQ2dWBNFlWKbr5YT1UMHHQNgaiVzh1aAyZOE2Ph7uw`,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

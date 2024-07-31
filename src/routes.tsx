import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "countries/:code", element: <DetailPage /> },
    ],
  },
]);

export default router;

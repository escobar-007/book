import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routers from "./routes/router.jsx";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "@tanstack/react-query";
import Providers from "./providers/providers.jsx";

createRoot(document.getElementById("root")).render(<Providers />);

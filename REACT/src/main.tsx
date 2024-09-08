import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Sidebar from "./components/Sidebar/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <section className="grid grid-cols-5 px-20 gap-16 mt-20">
      <Sidebar />
      <main className="text-gray-800 col-span-4 pb-20">
        <RouterProvider router={router} />
      </main>
    </section>
  </StrictMode>
);

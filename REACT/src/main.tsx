// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
// import "./index.css";
// import Home from "./pages/Home.tsx";
// import Projects from "./pages/Projects.tsx";
// import Sidebar from "./components/Sidebar/index.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/projects",
//     element: <Projects />,
//   },
// ]);

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <section className="grid grid-cols-5 px-20 gap-16 mt-10">
//       <Sidebar />
//       <main className="text-gray-800 col-span-4 pb-20">
//         <RouterProvider router={router} />
//       </main>
//     </section>
//   </StrictMode>
// );

// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import RootLayout from "./layouts/RootLayout.tsx"; // Layout yang akan berisi Sidebar

// Definisikan routing dengan layout
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <RootLayout />, // Gunakan RootLayout untuk menyertakan Sidebar
    children: [
      {
        path: "/", // Home path
        element: <Home />,
      },
      {
        path: "projects", // Projects path
        element: <Projects />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

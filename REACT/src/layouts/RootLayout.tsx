// layouts/RootLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/index.tsx";

const RootLayout = () => {
  return (
    <section className="grid grid-cols-5 px-20 gap-16 mt-10">
      {/* Sidebar tetap tampil di semua halaman */}
      <Sidebar />

      {/* Outlet adalah tempat konten dari child routes akan dirender */}
      <main className="text-gray-800 col-span-4 pb-20">
        <Outlet />
      </main>
    </section>
  );
};

export default RootLayout;

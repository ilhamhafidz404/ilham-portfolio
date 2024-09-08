import { useState } from "react";

// components
import Header from "./components/Header/Header";
import TitleSection from "./components/TitleSection";
import Button from "./components/Button";
import ProjectCard from "./components/ProjectCard";
import { SkillDock } from "./components/Dock";

// icon
import DownloadIcon from "./components/Icons/Download";

// data
import dataProject from "../public/data/projects.json";
import dataSkill from "../public/data/skills.json";
import dataTool from "../public/data/tools.json";
import TrophyIcon from "./components/Icons/Trophy";
import { Briefcase } from "lucide-react";
import UserIcon from "./components/Icons/User";
import Navbar from "./components/Navbar";

function App() {
  const [projects, _] = useState(dataProject);

  const [projectCategory, setProjectCategory] = useState(1);

  return (
    <>
      <section className="grid grid-cols-5 px-20 gap-16 mt-20">
        <aside>
          <div className="sticky top-0 h-screen py-10">
            <div className=" flex flex-col justify-between h-full">
              <ul>
                <li className="flex items-center gap-5 bg-gray-200 px-5 py-3 rounded-md hover:bg-gray-200 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Home
                </li>
                <li className="flex items-center gap-5 px-5 py-3 rounded-md hover:bg-gray-200 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  About
                </li>
                <li className="flex items-center gap-5 px-5 py-3 rounded-md hover:bg-gray-200 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                  Project
                </li>
              </ul>
              <div>
                <p className="font-medium">My Social Media</p>
                <ul className="mt-5">
                  <li className="flex gap-2 items-center mb-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                      alt="Instagram"
                      className="w-[30px]"
                    />
                    Instagram
                  </li>
                  <li className="flex gap-2 items-center mb-2">
                    <img
                      src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1725820124~exp=1725823724~hmac=266ca71018292c24229676bcb9aea9f9c3e2fef6ea05a92a476045e8d5225c99&w=740"
                      alt="Instagram"
                      className="w-[30px] rounded"
                    />
                    X
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <main className="text-gray-800 col-span-4 pb-20">
          <Header />

          <div className="border border-[#0d47a1] p-5 rounded-md bg-[#0d47a1]/10 mt-5">
            <h3 className="text-3xl font-semibold text-[#0d47a1]">NUTEAM</h3>
            <p className="mt-3">
              <span className="font-bold">Introducing Natanya</span> - an
              interactive polling tool that makes it easy to create engaging
              polls and collect data from an audience in real-time. It can be
              used during live events, and the results can be displayed with a
              chart data visualization.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div>
                <img
                  src="/images/projects/Nuteam/1.png"
                  alt="Nuteam 1"
                  className="w-full h-full object-cover rounded shadow"
                />
              </div>
              <div>
                <img
                  src="/images/projects/Nuteam/2.png"
                  alt="Nuteam 2"
                  className="w-full h-full object-cover rounded shadow"
                />
              </div>
            </div>
            <div className="mt-10">
              <h5 className="text-2xl font-semibold mb-3">
                Featured technologies used
              </h5>
              <img
                src="/images/skills/tailwind.png"
                alt="Tailwind CSS"
                className="w-[50px]"
              />
            </div>
          </div>
          <div className="border border-black p-5 rounded-md bg-black/10 mt-5">
            <h3 className="text-3xl font-semibold text-black">SAFRENZ</h3>
            <p className="mt-3">
              <span className="font-bold">Introducing Natanya</span> - an
              interactive polling tool that makes it easy to create engaging
              polls and collect data from an audience in real-time. It can be
              used during live events, and the results can be displayed with a
              chart data visualization.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div>
                <img
                  src="/images/projects/Safrenz/1.png"
                  alt="Safrenz 1"
                  className="w-full h-full object-cover rounded shadow"
                />
              </div>
              <div>
                <img
                  src="/images/projects/Safrenz/2.png"
                  alt="Safrenz 2"
                  className="w-full h-full object-cover rounded shadow"
                />
              </div>
            </div>
            <div className="mt-10">
              <h5 className="text-2xl font-semibold mb-3">
                Featured technologies used
              </h5>
              <img
                src="/images/skills/tailwind.png"
                alt="Tailwind CSS"
                className="w-[50px]"
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;

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
              About
            </li>
          </ul>
        </aside>
        <main className="text-gray-800 col-span-4">
          {/* <Navbar /> */}

          <Header />

          <section className="bg-gray-100 xl:pb-5 pb-20" id="about">
            <div className="container xl:min-h-screen">
              <TitleSection title="ABOUT" />
              <div className="grid lg:grid-cols-3">
                {/* <QuoteCard /> */}
                <div>
                  <img
                    src="/images/ilham.JPG"
                    alt="ilham-hafidz"
                    className="rounded border p-2 lg:w-full sm:w-[400px] w-[300px] lg:h-full sm:h-[400px] h-[300px] object-cover object-bottom mx-auto"
                  />
                </div>
                <div className="lg:col-span-2 flex items-center">
                  <section className="lg:-ml-[50px] lg:mt-0 -mt-[70px] bg-white sm:p-10 p-5 rounded shadow-md">
                    <h5 className="myfont-montserrat mytext-primary">
                      Hello Guys, I am Ilham Hafidz
                    </h5>
                    <h4 className="sm:text-3xl text-2xl font-bold tracking-wide myfont-montserrat dark:text-gray-100">
                      FULLSTACK WEB DEVELOPER
                    </h4>
                    <p className="mt-5 text-gray-800 myfont-roboto-mono dark:text-gray-200 sm:text-base text-sm">
                      Saya telah mengerjakan beberapa proyek, baik secara
                      individu maupun dalam tim. Ketika mengerjakan proyek
                      individu, saya terbiasa menangani desain frontend dan
                      backend sebuah website. Biasanya, saya menggunakan Laravel
                      dan VueJS untuk proyek-proyek tersebut. Sementara itu,
                      dalam proyek tim, saya lebih fokus dan mahir di bidang
                      frontend.
                    </p>

                    <div className="lg:flex sm:block hidden gap-5 min-h-[180px]">
                      <div>
                        <h3 className="mt-10 font-semibold">
                          This is my Skills
                        </h3>
                        <SkillDock data={dataSkill} />
                      </div>
                      <div>
                        <h3 className="mt-10 font-semibold">
                          This is my Tools
                        </h3>
                        <SkillDock data={dataTool} />
                      </div>
                    </div>

                    <div className="mt-10 inline-flex flex-col sm:flex-row items-center w-full">
                      <Button
                        text="Download CV"
                        target=""
                        icon={<DownloadIcon />}
                        addedClass="mr-4"
                      />
                      <br />
                      <Button
                        text="Hire Me"
                        target="mailto:ilhammhafidzz@gmail.com"
                        type="outline"
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          {/*  */}

          <section className="container" id="project">
            <TitleSection title="PROJECT" />

            <div className="mt-1 mb-20 text-center">
              <div className="gap-5 inline-flex sm:flex-row flex-col justify-center border rounded border-gray-100 bg-gray-100">
                <button
                  className={`flex gap-2 relative hover:mybg-primary-hovered px-5 py-2 rounded ${
                    projectCategory === 1
                      ? "mytext-primary hover:bg-transparent font-semibold after:content-[''] after:absolute after:mybg-primary after:opacity-20 after:rounded after:scale-100 after:h-[calc(100%+10px)] after:w-[calc(100%+5px)] after:block after:left-[-2.5px] after:top-[-5px]  scale-110"
                      : ""
                  }`}
                  onClick={() => setProjectCategory(1)}
                >
                  <TrophyIcon />
                  Perlombaan
                </button>

                <button
                  className={`flex gap-2 relative hover:mybg-primary-hovered px-5 py-2 rounded ${
                    projectCategory === 2
                      ? "mytext-primary hover:bg-transparent font-semibold after:content-[''] after:absolute after:mybg-primary after:opacity-20 after:rounded after:scale-100 after:h-[calc(100%+10px)] after:w-[calc(100%+5px)] after:block after:left-[-2.5px] after:top-[-5px]  scale-110"
                      : ""
                  }`}
                  onClick={() => setProjectCategory(2)}
                >
                  <Briefcase />
                  Pekerjaan
                </button>
                <button
                  className={`flex gap-2  relative hover:mybg-primary-hovered px-5 py-2 rounded ${
                    projectCategory === 3
                      ? "mytext-primary hover:bg-transparent font-semibold after:content-[''] after:absolute after:mybg-primary after:opacity-20 after:rounded after:scale-100 after:h-[calc(100%+10px)] after:w-[calc(100%+5px)] after:block after:left-[-2.5px] after:top-[-5px]  scale-110"
                      : ""
                  }`}
                  onClick={() => setProjectCategory(3)}
                >
                  <UserIcon />
                  Individu
                </button>
              </div>
            </div>

            {projects
              .filter((project) => project.category === projectCategory)
              .map((project, index) => (
                <ProjectCard
                  key={index} // Jangan lupa tambahkan key untuk elemen yang diulang
                  order={index + 1}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  photoSource={project.photo}
                  preview={project.preview}
                  github={project.github}
                />
              ))}
          </section>

          {/*  */}

          <footer className="container py-5 mt-28 border-t myborder-primary">
            <p className="myfont-roboto-mono text-gray-800 text-sm">
              &copy; Copyright Ilham Hafidz
            </p>
          </footer>
        </main>
      </section>
    </>
  );
}

export default App;

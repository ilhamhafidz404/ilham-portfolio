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

function App() {
  const [projects, _] = useState(dataProject);

  const [projectCategory, setProjectCategory] = useState(1);

  return (
    <main className="text-gray-800">
      <nav className="flex justify-between items-center px-28 py-5 fixed left-0 right-0 z-50 bg-white border-b border-[#d65d26]/70">
        <div>
          <h3 className="text-xl font-semibold">ILHAM HAFIDZ</h3>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
          </ul>
        </div>
      </nav>

      <Header />

      <section className="bg-gray-100">
        <div className="container h-screen">
          <TitleSection title="ABOUT" />
          <div className="grid grid-cols-3">
            {/* <QuoteCard /> */}
            <div>
              <img
                src="/images/ilham.JPG"
                alt="ilham-hafidz"
                className="rounded border p-2"
              />
            </div>
            <div className="col-span-2 flex items-center">
              <section className="-ml-[50px] bg-white p-10 rounded shadow-md">
                <h5 className="myfont-montserrat mytext-primary">
                  Hello Guys, I am Ilham Hafidz
                </h5>
                <h4 className="text-3xl font-bold tracking-wide myfont-montserrat dark:text-gray-100">
                  FULLSTACK WEB DEVELOPER
                </h4>
                <p className="mt-5 text-gray-800 myfont-roboto-mono dark:text-gray-200">
                  Saya telah mengerjakan beberapa proyek, baik secara individu
                  maupun dalam tim. Ketika mengerjakan proyek individu, saya
                  terbiasa menangani desain frontend dan backend sebuah website.
                  Biasanya, saya menggunakan Laravel dan VueJS untuk
                  proyek-proyek tersebut. Sementara itu, dalam proyek tim, saya
                  lebih fokus dan mahir di bidang frontend.
                </p>

                <div className="flex gap-5">
                  <div>
                    <h3 className="mt-10 font-semibold">This is my Skills</h3>
                    <SkillDock data={dataSkill} />
                  </div>
                  <div>
                    <h3 className="mt-10 font-semibold">This is my Tools</h3>
                    <SkillDock data={dataTool} />
                  </div>
                </div>

                <div className="mt-10 inline-flex">
                  <Button
                    text="Download CV"
                    target=""
                    icon={<DownloadIcon />}
                    addedClass="mr-4"
                  />
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

      <section className="container">
        <TitleSection title="PROJECT" />

        <div className="mt-1 text-center">
          <div className="gap-5 inline-flex justify-center border rounded border-gray-100 bg-gray-100">
            <button
              className={`relative mytext-primary hover:mybg-primary-hovered px-5 py-2 rounded ${
                projectCategory === 1
                  ? "hover:bg-transparent font-semibold after:content-[''] after:absolute after:mybg-primary after:opacity-20 after:rounded after:scale-110 after:h-[calc(100%+10px)] after:w-[calc(100%+5px)] after:block after:left-[-2.5px] after:top-[-5px] after:button-animation-pulse scale-110"
                  : ""
              }`}
              onClick={() => setProjectCategory(1)}
            >
              Perlombaan
            </button>

            <button
              className={`relative mytext-primary hover:mybg-primary-hovered px-5 py-2 rounded ${
                projectCategory === 2
                  ? "hover:bg-transparent font-semibold after:content-[''] after:absolute after:mybg-primary after:opacity-20 after:rounded after:scale-110 after:h-[calc(100%+10px)] after:w-[calc(100%+5px)] after:block after:left-[-2.5px] after:top-[-5px] after:button-animation-pulse scale-110"
                  : ""
              }`}
              onClick={() => setProjectCategory(2)}
            >
              Pekerjaan
            </button>
            <button
              className={`relative mytext-primary hover:mybg-primary-hovered px-5 py-2 rounded ${
                projectCategory === 3
                  ? "hover:bg-transparent font-semibold after:content-[''] after:absolute after:mybg-primary after:opacity-20 after:rounded after:scale-110 after:h-[calc(100%+10px)] after:w-[calc(100%+5px)] after:block after:left-[-2.5px] after:top-[-5px] after:button-animation-pulse scale-110"
                  : ""
              }`}
              onClick={() => setProjectCategory(3)}
            >
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

      <footer className="mt-28 mybg-primary">
        {/* <div className="flex items-center justify-center gap-20 py-10">
          <div>
            <h4 className="text-2xl font-semibold">
              🚀LETS BUILD SOMETHING AWESOME
            </h4>
          </div>
          <div>
            <Button text="Learn More" target="" />
          </div>
        </div> */}
        {/* <div className="mybg-primary top lg:px-24 sm:px-8 px-5 py-10 flex md:flex-row flex-col"></div> */}
        <div className="mybg-primary py-5">
          <h5 className="myfont-roboto-mono text-center text-white">
            &copy; Copyright Ilham Hafidz
          </h5>
        </div>
      </footer>
    </main>
  );
}

export default App;

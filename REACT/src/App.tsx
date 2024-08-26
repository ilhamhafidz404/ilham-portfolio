import { useState } from "react";

// components
import Header from "./components/Header/Header";
import TitleSection from "./components/TitleSection";
import QuoteCard from "./components/QuoteCard";
import Button from "./components/Button";
import ProjectCard from "./components/ProjectCard";

// icon
import DownloadIcon from "./components/Icons/Download";

// data
import dataProject from "../public/data/projects.json";

function App() {
  const [projects, _] = useState(dataProject);

  return (
    <main className="text-gray-800">
      <Header />

      <TitleSection title="ABOUT" />

      <section className="container">
        <div className="grid grid-cols-3">
          <QuoteCard />
          <div className="col-span-2 flex items-center">
            <section className="md:ml-10 lg:ml-0 md:text-center lg:text-left text-center">
              <h5 className="myfont-montserrat mytext-primary">
                Hello Guys, I am Ilham Hafidz
              </h5>
              <h4 className="text-3xl font-bold tracking-wide myfont-montserrat dark:text-gray-100">
                FULLSTACK WEB DEVELOPER
              </h4>
              <p className="mt-5 text-gray-600 myfont-roboto-mono dark:text-gray-200">
                Saya telah mengerjakan beberapa proyek, baik secara individu
                maupun dalam tim. Ketika mengerjakan proyek individu, saya
                terbiasa menangani desain frontend dan backend sebuah website.
                Biasanya, saya menggunakan Laravel dan VueJS untuk proyek-proyek
                tersebut. Sementara itu, dalam proyek tim, saya lebih fokus dan
                mahir di bidang frontend.
              </p>
              <div className="mt-10">
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
      </section>

      {/*  */}

      <section className="container">
        <TitleSection title="PROJECT" />

        {projects.map((project, index) => (
          <ProjectCard
            order={index + 1}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            photoSource={project.photo}
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

import { useState } from "react";
// import "./App.css";
import Header from "./components/Header/Header";
import TitleSection from "./components/TitleSection";
import QuoteCard from "./components/QuoteCard";
import Button from "./components/Button";
import DownloadIcon from "./components/Icons/Download";

function App() {
  return (
    <main className="text-gray-800">
      <Header />

      <TitleSection />

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
    </main>
  );
}

export default App;

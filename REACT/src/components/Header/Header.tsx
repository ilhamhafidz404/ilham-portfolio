import SparklesText from "../../../@/components/magicui/sparkles-text";
import Button from "../Button";
import { SkillDock } from "../Dock";
import DocumentIcon from "../Icons/Document";
import PhotoCard from "./PhotoCard";

import dataSkill from "../../../public/data/skills.json";

export default function Header() {
  return (
    <section className="h-screen">
      <div className="relative">
        <h2 className="text-4xl font-semibold text-indigo-500">ILHAM HAFIDZ</h2>
        {/* <h1 className="text-6xl font-bold tracking-wide leading-tight after:content-[''] after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-100 after:w-[680px] after:h-[20px] after:absolute after:left-12 after:bottom-3 after:-z-10">
          a Fullstack Developer
        </h1> */}
        <h1 className="text-6xl font-bold tracking-wide leading-tight">
          a Fullstack Developer
        </h1>
      </div>
      <div className="mt-5">
        <p className="leading-loose">
          Aspiring Web Developer Student with a passion for crafting
          pixel-perfect web experiences. I'm deeply invested in the world of web
          development, particularly using JavaScript. I thrive in collaborative
          environments, working alongside teams to bring efficient, scalable,
          and visually stunning web applications to life.
        </p>
      </div>
      <hr className="mt-10" />
      <div className="mt-10">
        <h4 className="text-xl font-medium mb-4">Tools That I Have Used</h4>
        {/* <SkillDock data={dataSkill} /> */}
        <div className="flex gap-3">
          <span className="inline-flex gap-2 items-center border rounded-xl px-4 py-2 text-xs font-medium">
            <img
              src="/images/skills/bootstrap.png"
              alt="Bootstrap"
              className="w-[25px]"
            />
            Bootstrap
          </span>
          <span className="inline-flex gap-2 items-center border rounded-xl px-4 py-2 text-xs font-medium">
            <img
              src="/images/skills/tailwind.png"
              alt="Tailwind"
              className="w-[25px]"
            />
            Tailwind
          </span>
          <span className="inline-flex gap-2 items-center border rounded-xl px-4 py-2 text-xs font-medium">
            <img
              src="/images/skills/vue.png"
              alt="Vue JS"
              className="w-[25px]"
            />
            Vue JS
          </span>
          <span className="inline-flex gap-2 items-center border rounded-xl px-4 py-2 text-xs font-medium">
            <img
              src="/images/skills/react.png"
              alt="React JS"
              className="w-[25px]"
            />
            React JS
          </span>
          <span className="inline-flex gap-2 items-center border rounded-xl px-4 py-2 text-xs font-medium">
            <img
              src="/images/skills/laravel.png"
              alt="Laravel"
              className="w-[25px]"
            />
            Next JS
          </span>
          <span className="inline-flex gap-2 items-center border rounded-xl px-4 py-2 text-xs font-medium">
            <img
              src="/images/skills/golang.png"
              alt="Golang"
              className="w-[25px]"
            />
            Golang
          </span>
          <span className="inline-flex gap-2 items-center border rounded-xl px-4 py-2 text-xs font-medium">
            <img
              src="/images/skills/laravel.png"
              alt="Laravel"
              className="w-[25px]"
            />
            Laravel
          </span>
          <span className="inline-flex gap-2 items-center border rounded-xl px-4 py-2 text-xs font-medium">
            <img
              src="/images/skills/laravel.png"
              alt="Laravel"
              className="w-[25px]"
            />
            Express JS
          </span>
        </div>
      </div>
      <hr className="mt-10" />
      <h4 className="text-xl font-medium mt-10">Stats</h4>
      <div className="grid grid-cols-3 gap-10 mt-5">
        <div>
          <h5 className="text-5xl font-bold">4+</h5>
          <h6 className="font-semibold mb-5">Year Experience</h6>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold">10</h5>
          <h6 className="font-semibold mb-5">Happy Client</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold">10</h5>
          <h6 className="font-semibold mb-5">Happy Client</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
          </p>
        </div>
      </div>
    </section>
    // <section id="home" className="container mx-auto h-screen flex items-center">
    //   <header className="myfont-montserrat px-0">
    //     <div className="flex lg:flex-row flex-col-reverse items-center">
    //       <div className="flex items-center justify-center lg:w-1/2 w-full sm:mt-0 mt-10">
    //         <div className="pl-0 lg:text-left text-center">
    //           <h3 className="mytext-primary tracking-tighter text-xl">
    //             Hello I am
    //           </h3>
    //           <SparklesText
    //             text="Ilham Hafidz"
    //             className="uppercase lg:text-6xl text-4xl font-bold tracking-tight"
    //             sparklesCount={3}
    //             colors={{ first: "#d65d26", second: "#d65d26" }}
    //           />
    //           <p className="myfont-roboto-mono mt-7 mb-10 text-xs sm:text-sm lg:text-base lg:p-0 px-6 ">
    //             Saya adalah web programmer dengan pengalaman empat tahun, selama
    //             waktu tersebut saya telah terlibat dalam berbagai proyek, mulai
    //             dari membangun situs web responsif hingga mengembangkan aplikasi
    //             web kompleks.
    //           </p>
    //           <div className="mt-7 sm:flex gap-3 lg:justify-start justify-center">
    //             <Button
    //               text="Lihat Tentang Saya"
    //               target="https://github.com/ilhamhafidz404?tab=repositories"
    //             />
    //             <br className="sm:hidden block" />
    //             <Button
    //               text="Download CV"
    //               target="mailto:ilhammhafidzz@gmail.com"
    //               type="outline"
    //               icon={<DocumentIcon />}
    //               addedClass="gap-1 sm:mt-0 mt-3"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <PhotoCard />
    //     </div>
    //   </header>
    // </section>
  );
}

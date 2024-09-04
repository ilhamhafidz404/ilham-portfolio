import SparklesText from "../../../@/components/magicui/sparkles-text";
import Button from "../Button";
import DocumentIcon from "../Icons/Document";
import PhotoCard from "./PhotoCard";

export default function Header() {
  return (
    <section id="home" className="container mx-auto h-screen flex items-center">
      <header className="myfont-montserrat px-0">
        <div className="flex lg:flex-row flex-col-reverse items-center">
          <div className="flex items-center justify-center lg:w-1/2 w-full sm:mt-0 mt-10">
            <div className="pl-0 lg:text-left text-center">
              <h3 className="mytext-primary tracking-tighter text-xl">
                Hello I am
              </h3>
              <SparklesText
                text="Ilham Hafidz"
                className="uppercase lg:text-6xl text-4xl font-bold tracking-tight"
                sparklesCount={3}
                colors={{ first: "#d65d26", second: "#d65d26" }}
              />
              <p className="myfont-roboto-mono mt-7 mb-10 text-xs sm:text-sm lg:text-base lg:p-0 px-6 ">
                Saya adalah web programmer dengan pengalaman empat tahun, selama
                waktu tersebut saya telah terlibat dalam berbagai proyek, mulai
                dari membangun situs web responsif hingga mengembangkan aplikasi
                web kompleks.
              </p>
              <div className="mt-7 sm:flex gap-3 lg:justify-start justify-center">
                <Button
                  text="Lihat Tentang Saya"
                  target="https://github.com/ilhamhafidz404?tab=repositories"
                />
                <br className="sm:hidden block" />
                <Button
                  text="Download CV"
                  target="mailto:ilhammhafidzz@gmail.com"
                  type="outline"
                  icon={<DocumentIcon />}
                  addedClass="gap-1 sm:mt-0 mt-3"
                />
              </div>
            </div>
          </div>
          <PhotoCard />
        </div>
      </header>
    </section>
  );
}

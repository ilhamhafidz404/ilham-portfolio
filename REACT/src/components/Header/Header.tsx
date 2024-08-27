import SparklesText from "../../../@/components/magicui/sparkles-text";
import Button from "../Button";
import DocumentIcon from "../Icons/Document";
import PhotoCard from "./PhotoCard";

export default function Header() {
  return (
    <div className="container mx-auto h-screen" id="home">
      <header className="myfont-montserrat px-0 md:pt-28 pt-14">
        <div className="flex md:flex-row flex-col-reverse">
          <div className="flex items-center justify-center md:w-1/2 w-full sm:mt-0 mt-10">
            <div className="md:pl-5 lg:pl-20 pl-0 md:text-left text-center">
              <h3 className="mytext-primary tracking-tighter text-xl">
                Hello I am
              </h3>
              <SparklesText
                text="Ilham Hafidz"
                className="uppercase md:text-6xl text-4xl font-bold tracking-tight"
                sparklesCount={3}
                colors={{ first: "#d65d26", second: "#d65d26" }}
              />
              <p className="myfont-roboto-mono mt-7 mb-10 text-sm md:text-base md:p-0 px-6 ">
                Saya adalah web programmer dengan pengalaman empat tahun, selama
                waktu tersebut saya telah terlibat dalam berbagai proyek, mulai
                dari membangun situs web responsif hingga mengembangkan aplikasi
                web kompleks.
              </p>
              <div className="mt-7 flex gap-3">
                <Button
                  text="Lihat Tentang Saya"
                  target="https://github.com/ilhamhafidz404?tab=repositories"
                />
                <a
                  href={"target"}
                  target="_blank"
                  className={
                    "inline-flex gap-2 items-center bg-gray-300 text-gray-800 rounded font-semibold hover:opacity-90 hover:shadow-md text-sm px-5 py-3"
                  }
                >
                  <DocumentIcon />
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <PhotoCard />
        </div>
      </header>
    </div>
  );
}

import SparklesText from "../../../@/components/magicui/sparkles-text";
import Button from "../Button";
import PhotoCard from "./PhotoCard";

export default function Header() {
  return (
    <div className="container mx-auto" id="home">
      <header className="myfont-montserrat lg:px-8 px-0 md:pt-28 pt-14 ">
        <div className="flex md:flex-row flex-col-reverse">
          <div className="flex items-center justify-center md:w-1/2 w-full sm:mt-0 mt-10">
            <div className="md:pl-5 lg:pl-20 pl-0 md:text-left text-center">
              <h3 className="mytext-primary font-light tracking-tighter text-xl">
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
              <div className="mt-7">
                <Button
                  text="Lihat Projek Saya"
                  target="https://github.com/ilhamhafidz404?tab=repositories"
                />

                {/* <ShinyButton
                    text="Lihat projek saya"
                    className="border-[#d65d26] border mytext-primary px-7 py-3 rounded-3xl font-semibold hover:opacity-90 hover:shadow-md"
                  /> */}
              </div>
            </div>
          </div>
          <PhotoCard />
        </div>
      </header>
    </div>
  );
}

export default function QuoteCard() {
  return (
    <div className="card shadow-xl shadow-[#d65d26]/30 p-5 rounded relative card-about w-80 mx-auto bg-white/50">
      <p className="m-5 text-center text-gray-800 text-about myfont-montserrat dark:text-gray-100">
        Saya adalah web developer yang siap mengubah ide-ide hebat menjadi
        kenyataan melalui solusi-solusi inovatif. Mari berkolaborasi untuk
        menciptakan proyek yang luar biasa.
      </p>
      <div
        className="ilham-circle-img w-16 h-16 mybg-primary mx-auto rounded-full bg-cover bg-center mt-10 border"
        style={{
          backgroundImage: `url("/images/ilham.JPG")`,
        }}
      ></div>
      <h5 className="text-base font-bold tracking-wider text-center mt-2 myfont-poppins dark:text-gray-100">
        Ilham Hafidz
      </h5>
      <p className="text-center text-sm text-gray-500 dark:text-gray-100">
        CEO ALOPE
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <section>
      <div className="relative">
        {/* <div className="bg-indigo-500 h-[300px] absolute top-0 w-full left-0 -z-10"></div> */}
        {/* <img
          src="/images/ilham-about.jpg"
          alt="Ilham Hafidz"
          className="w-[300px]"
        /> */}
        <h2 className="text-4xl font-semibold text-indigo-500">
          👋 Hello I'am
        </h2>
        {/* <h2 className="text-4xl font-semibold text-indigo-500">Hello I'am</h2> */}
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
              src="/images/skills/next-js.svg"
              alt="Next Js"
              className="w-[22px]"
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
              src="/images/skills/express.svg"
              alt="Express JS"
              className="w-[22px]"
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

      {/*  */}

      <hr className="mt-10" />
      <h4 className="text-xl font-medium mt-10">Experience</h4>
      <div className="grid grid-cols-2 gap-10 mt-3">
        <div className="flex items-center gap-5 border rounded-md p-5">
          <div>
            <img src="https://cinta.id/images/logo.png" alt="cinta ID" />
          </div>
          <div>
            <h6 className="text-2xl font-semibold">CINTA ID</h6>
            <p className="text-sm">as Fullstack Developer</p>
            <p>June 2024 - Present</p>
            <p>Part Time Remote</p>
          </div>
        </div>
        <div className="flex items-center gap-5 border rounded-md p-5">
          <div>
            <img src="https://cinta.id/images/logo.png" alt="cinta ID" />
          </div>
          <div>
            <h6 className="text-2xl font-semibold">Hudoro Solusi Digital</h6>
            <p className="text-sm">as Fullstack Developer</p>
            <p>June 2024 - sekarang</p>
            <p>Part Time Remote</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <section>
        <h4 className="text-xl font-medium mt-10">Projects</h4>
        <div className="border border-[#0d47a1] p-7 rounded-md bg-[#0d47a1]/10 mt-3">
          <h3 className="text-3xl font-semibold text-[#0d47a1]">NUTEAM</h3>
          <p className="mt-3">
            <span className="font-bold">Introducing Natanya</span> - an
            interactive polling tool that makes it easy to create engaging polls
            and collect data from an audience in real-time. It can be used
            during live events, and the results can be displayed with a chart
            data visualization.
          </p>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <img
                src="/images/projects/Nuteam/1.png"
                alt="Nuteam 1"
                className="w-full h-full object-cover rounded shadow"
              />
            </div>
            <div>
              <img
                src="/images/projects/Nuteam/2.png"
                alt="Nuteam 2"
                className="w-full h-full object-cover rounded shadow"
              />
            </div>
          </div>
          <div className="mt-10">
            <h5 className="text-2xl font-semibold mb-3">
              Featured technologies used
            </h5>
            <img
              src="/images/skills/tailwind.png"
              alt="Tailwind CSS"
              className="w-[50px]"
            />
          </div>
        </div>
        <div className="border border-black p-7 rounded-md bg-black/10 mt-5">
          <h3 className="text-3xl font-semibold text-black">SAFRENZ</h3>
          <p className="mt-3">
            <span className="font-bold">Introducing Natanya</span> - an
            interactive polling tool that makes it easy to create engaging polls
            and collect data from an audience in real-time. It can be used
            during live events, and the results can be displayed with a chart
            data visualization.
          </p>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <img
                src="/images/projects/Safrenz/1.png"
                alt="Safrenz 1"
                className="w-full h-full object-cover rounded shadow"
              />
            </div>
            <div>
              <img
                src="/images/projects/Safrenz/2.png"
                alt="Safrenz 2"
                className="w-full h-full object-cover rounded shadow"
              />
            </div>
          </div>
          <div className="mt-10">
            <h5 className="text-2xl font-semibold mb-3">
              Featured technologies used
            </h5>
            <img
              src="/images/skills/tailwind.png"
              alt="Tailwind CSS"
              className="w-[50px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

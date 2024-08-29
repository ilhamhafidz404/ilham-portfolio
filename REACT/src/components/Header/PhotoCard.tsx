import Badge from "./Badge";

export default function PhotoCard() {
  return (
    <div className="flex items-center justify-center md:w-1/2 w-full relative">
      <div className="absolute rounded-xl bg-gradient-to-br from-[#d65d26] to-[#d65d26]/80 block lg:w-[400px] lg:h-[370px] w-[300px] h-[270px]"></div>
      <img
        src="ilham.png"
        alt="ilhamhafidz"
        className="rounded md:mt-0 mt-10 relative z-10 lg:w-[500px] w-[350px]"
      />
      <Badge />
    </div>
  );
}

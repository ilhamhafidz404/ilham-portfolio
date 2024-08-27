import Badge from "./Badge";

export default function PhotoCard() {
  return (
    <div className="flex items-center justify-center md:w-1/2 w-full relative">
      <div className="absolute rounded-xl bg-gradient-to-br from-[#d65d26]/90 to-[#d65d26]/60 block w-[350px] h-[320px]"></div>
      <img
        src="ilham.png"
        alt="ilhamhafidz"
        className="rounded md:mt-0 mt-10 relative z-10 w-[450px]"
      />
      <Badge />
    </div>
  );
}

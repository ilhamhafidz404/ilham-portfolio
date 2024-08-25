export default function PhotoCard() {
  return (
    <div className="flex items-center justify-center md:w-1/2 w-full relative">
      <div className="absolute rounded-xl mybg-primary block w-[350px] h-[320px]"></div>
      <img
        src="ilham.png"
        alt="ilhamhafidz"
        className="rounded md:mt-0 mt-10 relative z-10 w-[450px]"
      />
      {/* <img
              src="public/img/shapes/points3.png"
              className="absolute w-32 -bottom-10 right-24"
            /> */}
    </div>
  );
}

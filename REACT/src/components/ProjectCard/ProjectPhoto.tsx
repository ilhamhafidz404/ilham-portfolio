export default function ProjectPhoto({ photoSource }: { photoSource: string }) {
  return (
    <div className="flex justify-center w-[500px] h-[400px] rounded-xl bg-cover bg-center overflow-hidden relative sm:mx-0 mx-auto -z-10">
      <div className="overlay absolute top-0 left-0 bottom-0 right-0 mybg-primary opacity-30"></div>
      <img src={photoSource} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

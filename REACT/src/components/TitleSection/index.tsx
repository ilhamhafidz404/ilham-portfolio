export default function TitleSection({ title }: { title: string }) {
  return (
    <h2
      className={
        "left-1/2 -translate-x-1/2 mt-20 mb-7 text-7xl myfont-montserrat tracking-widest font-extrabold relative inline-block before:content-['" +
        title +
        "'] before:text-transparent before:absolute before:text-title-stroke before:bottom-[-10px] before:right-[-10px] before:-z-10"
      }
    >
      {title}
    </h2>
  );
}

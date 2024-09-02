import { useEffect, useState } from "react";
import Button from "../Button";
import PreviewIcon from "../Icons/Preview";
import ProjectPhoto from "./ProjectPhoto";

export default function ProjectCard({
  order,
  title,
  subtitle,
  description,
  photoSource,
  preview,
  github,
}: {
  order: number;
  title: string;
  subtitle: string;
  description: string;
  photoSource: string;
  preview: string;
  github: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    console.log(isMobile);
  });

  return (
    <div className="lg:flex block justify-center mt-10">
      {isMobile && <ProjectPhoto photoSource={photoSource} />}
      {order % 2 > 0 && !isMobile && <ProjectPhoto photoSource={photoSource} />}
      <div
        className={
          order % 2 > 0
            ? "flex items-center lg:w-1/2 w-full z-10 lg:mt-0 -mt-16 lg:-ml-20"
            : "flex items-center lg:w-1/2 w-full z-10 lg:mt-0 -mt-16 lg:-mr-20"
        }
      >
        <div className="mybg-gray dark:bg-gray-800 px-8 py-7 rounded-md shadow bg-white">
          <h1 className="sm:text-3xl text-2xl myfont-montserrat font-bold tracking-wide">
            {title}
          </h1>
          <h6 className="sm:text-sm text-xs mytext-primary myfont-poppins dark:text-gray-100 italic">
            {subtitle}
          </h6>
          <p className="mt-5 text-gray-600 myfont-roboto-mono dark:text-gray-200 sm:text-base text-sm">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-10">
            <Button text="See in Github" target={github} size="sm" />
            <Button
              text="Preview"
              target={preview}
              type="outline"
              icon={<PreviewIcon />}
              size="sm"
              addedClass="inline-flex gap-2"
            />
          </div>
        </div>
      </div>
      {order % 2 == 0 && !isMobile && (
        <ProjectPhoto photoSource={photoSource} />
      )}
    </div>
  );
}

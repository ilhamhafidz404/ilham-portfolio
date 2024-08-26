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
  return (
    <div className="sm:flex block justify-center mt-10">
      {order % 2 > 0 && <ProjectPhoto photoSource={photoSource} />}
      <div
        className={
          order % 2 > 0
            ? "flex items-center sm:w-1/2 w-full z-10 sm:mt-0 -mt-16 sm:-ml-20 mx-0"
            : "flex items-center sm:w-1/2 w-full z-10 sm:mt-0 -mt-16 sm:-mr-20 mx-0"
        }
      >
        <div className="mybg-gray dark:bg-gray-800 px-8 py-7 rounded-md shadow bg-white">
          <h1 className="mytext-primary text-3xl myfont-montserrat font-bold tracking-wide">
            {title}
          </h1>
          <h6 className="text-sm text-gray-800 myfont-poppins dark:text-gray-100 italic">
            {subtitle}
          </h6>
          <p className="mt-5 text-gray-600 myfont-roboto-mono dark:text-gray-200">
            {description}
          </p>
          <div className="flex gap-2 mt-10">
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
      {order % 2 == 0 && <ProjectPhoto photoSource={photoSource} />}
    </div>
  );
}

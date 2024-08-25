import { useEffect, useState } from "react";

export default function Button({
  text,
  addedClass,
  target,
  icon,
  type = "solid",
  size = "base",
}: {
  text: string;
  addedClass?: string;
  target: string;
  icon?: React.ReactNode;
  type?: string;
  size?: string;
}) {
  const [sizeValue, setSizeValue] = useState("px-10 py-3");

  useEffect(() => {
    if (size == "sm") {
      setSizeValue("px-5 py-2");
    }
  }, []);

  return (
    <a
      href={target}
      target="_blank"
      className={
        type == "solid"
          ? "inline-flex items-center mybg-primary text-gray-100 rounded-3xl font-semibold hover:opacity-90 hover:shadow-md text-sm " +
            sizeValue +
            " border-2 myborder-primary " +
            addedClass
          : "inline-flex items-center rounded-3xl border-2 myborder-primary mytext-primary " +
            sizeValue +
            " myfont-roboto-mono hover:mybg-primary hover:text-white bg-transparent " +
            addedClass
      }
    >
      {icon}
      {text}
    </a>
  );
}

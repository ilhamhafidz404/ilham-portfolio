import React from "react";

import { Dock, DockIcon } from "../../../@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function SkillDock({
  data,
}: {
  data: { img: string; alt: string; class: string }[];
}) {
  return (
    <div className="relative mt-3">
      <Dock direction="middle" className="md:p-5 p-3 rounded-md">
        {data.map((val) => (
          <DockIcon>
            <img
              src={val.img}
              alt={val.alt}
              className={`sm:w-auto w-[25px] ${val.class}`}
            />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}

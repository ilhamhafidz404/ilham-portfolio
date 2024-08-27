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
      <Dock direction="middle" className="p-5 rounded-md">
        {data.map((val) => (
          <DockIcon>
            <img src={val.img} alt={val.alt} className={val.class} />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}

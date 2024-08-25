export default function Button({
  text,
  addedClass,
  target,
  icon,
  type = "solid",
}: {
  text: string;
  addedClass?: string;
  target: string;
  icon?: React.ReactNode;
  type?: string;
}) {
  return (
    <a
      href={target}
      target="_blank"
      className={
        type == "solid"
          ? "mybg-primary text-gray-100 rounded-3xl font-semibold hover:opacity-90 hover:shadow-md text-sm px-10 py-3 border-2 myborder-primary " +
            addedClass
          : "rounded-3xl border-2 myborder-primary mytext-primary px-10 py-3 myfont-roboto-mono hover:mybg-primary hover:text-white bg-transparent " +
            addedClass
      }
    >
      {icon}
      {text}
    </a>
  );
}

import { Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    icon: "",
    link: "/",
  },
  {
    name: "Blogs",
    icon: "",
    link: "",
  },
  {
    name: "Projects",
    icon: "",
    link: "/projects",
  },
];

export default function Sidebar() {
  return (
    <aside>
      <div className="sticky top-0 h-screen py-10">
        <div className=" flex flex-col justify-between h-full">
          <ul>
            {links.map((link) => (
              <li
                key={link.name}
                className="bg-gray-200 rounded-md hover:bg-gray-200 mb-2"
              >
                <a
                  href={link.link}
                  className="flex items-center gap-5 w-full px-5 py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <p className="font-medium">Contact Me</p>
            <ul className="mt-3">
              <li className="flex gap-2 items-center mb-2 text-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  alt="Instagram"
                  className="w-[20px]"
                />
                Instagram
              </li>
              <li className="flex gap-2 items-center mb-2 text-sm">
                <img
                  src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1725820124~exp=1725823724~hmac=266ca71018292c24229676bcb9aea9f9c3e2fef6ea05a92a476045e8d5225c99&w=740"
                  alt="Instagram"
                  className="w-[20px] rounded"
                />
                X
              </li>
              <li className="flex gap-2 items-center mb-2 text-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png"
                  alt="Gmail"
                  className="w-[20px]"
                />
                Gmail
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

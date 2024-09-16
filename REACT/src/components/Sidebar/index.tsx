import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    link: "/",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    name: "Blogs",
    link: "/blogs",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
  {
    name: "Projects",
    link: "/projects",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
    ),
  },
];

export default function Sidebar() {
  return (
    <aside>
      <div className="sticky top-0 h-screen">
        <div className=" flex flex-col justify-between h-full">
          <div>
            <img
              src="/images/new-il-logo.png"
              alt="logo"
              className="w-[70px]"
            />
            <ul className="mt-10">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `flex items-center gap-5 w-full px-5 py-3 rounded-md hover:bg-gray-200 mb-2 ${
                        isActive ? "bg-gray-200" : ""
                      }`
                    }
                  >
                    {link.icon()}
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
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

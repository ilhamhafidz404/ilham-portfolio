import { useEffect } from "react";
import BarsIcon from "../Icons/Bars";

export default function Navbar() {
  const handleNavbar = () => {
    const mobileNavList = document.getElementById("mobileNavList");
    mobileNavList?.classList.toggle("hidden");
    mobileNavList?.classList.toggle("block");
  };

  const handleResize = () => {
    const mobileNavList = document.getElementById("mobileNavList");
    if (window.innerWidth > 640) {
      mobileNavList?.classList.add("hidden");
      mobileNavList?.classList.remove("block");
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return (
    <section>
      <nav className="fixed left-0 right-0 z-50 bg-white border-b border-[#d65d26]/70">
        <div className="container flex justify-between items-center sm:py-5 py-3">
          <div className="flex items-center gap-1">
            <img
              src="/images/ilham-logo.png"
              alt="ilham-logo"
              className="sm:w-[40px] w-[30px]"
            />
            <h3 className="sm:text-xl font-semibold">ILHAM HAFIDZ</h3>
          </div>
          <div className="sm:block hidden">
            <ul className="flex gap-5">
              <li>
                <a className="font-semibold hover:mytext-primary" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="font-semibold hover:mytext-primary" href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className="font-semibold hover:mytext-primary"
                  href="#project"
                >
                  Project
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:hidden block">
            <button onClick={handleNavbar}>
              <BarsIcon />
            </button>
          </div>
        </div>
      </nav>
      <div
        id="mobileNavList"
        className="hidden fixed bg-white left-0 right-0 top-[50px] z-50 border-b border-[#d65d26]/70 "
      >
        <ul className="flex gap-5 justify-center mt-7 mb-7">
          <li>
            <a className="font-semibold hover:mytext-primary" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-semibold hover:mytext-primary" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-semibold hover:mytext-primary" href="#project">
              Project
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

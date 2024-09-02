export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 z-50 bg-white border-b border-[#d65d26]/70">
      <div className="container flex justify-between items-center py-5 ">
        <div className="flex items-center gap-1">
          <img
            src="/images/ilham-logo.png"
            alt="ilham-logo"
            className="w-[40px]"
          />
          <h3 className="text-xl font-semibold">ILHAM HAFIDZ</h3>
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
              <a className="font-semibold hover:mytext-primary" href="#project">
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

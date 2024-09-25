import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => {
  return (
    <LinkScroll className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
      {title}
    </LinkScroll>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(initialstate = false);
  return (
    <header className="fixed top-0 left-0 w-full py-10 z-50">
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* Corrected empty <a> tag */}
        <a className="lg:hidden flex-1 cursor-pointer z-2" />

        {/* Image */}
        <img src="/images/xora.svg" alt="logo" width={115} height={55} />


          <div className="w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0"></div>

        {/* Navigation */}
        <div className=" max-lg:relative max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
          <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
            <ul className="flex max-lg:block max-lg:px-12">
              {/* NavLink with features and pricing */}
              <li className="nav-li">
                <NavLink title="Features" />
                <div className="dot" />
                <NavLink title="Pricing" />
              </li>

              {/* Logo in the center */}
              <li className="nav-logo">
                <LinkScroll>
                  <img
                    src="/images/xora.svg"
                    alt="logo"
                    width={160}
                    height={55}
                  />
                </LinkScroll>
              </li>
              <li className="nav-li">
                <NavLink title="FAQ" />
                <div className="dot" />
                <NavLink title="Download" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <button className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
         <img src="/images/magic.svg" alt="magic" />
      </button>
    </header>
  );
};

export default Header;

import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => {
  return (
    <LinkScroll className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
      {title}
    </LinkScroll>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-10 z-50">
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* Corrected empty <a> tag */}
        <a className="lg:hidden flex-1 cursor-pointer z-2" />

        {/* Image */}
        <img src="/images/xora.svg" alt="logo" width={115} height={55} />

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
    </header>
  );
};

export default Header;

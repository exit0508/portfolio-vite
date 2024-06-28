import { Link } from "wouter";

const Header = () => {
  return (
    <header className="rounded-full bg-primaryShade1/80 backdrop-blur-sm border-2 border-white/30 shadow-lg dark:bg-bgDark">
      <div className="flex h-20 max-w-screen-xl items-center gap-8 px-6 sm:px-10 lg:px-12">
        <div className="text-3xl">
          <Link href="/">
            <a className="text-black hover:text-primaryHover dark:text-primaryHoverDark">
              Yurina Deguchi
            </a>
          </Link>
        </div>
        <div className="text-xl flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-xl">
              <li>
                <Link href="/about">
                  <a className="text-black hover:text-primaryHover dark:text-primaryHoverDark">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-black hover:text-primaryHover dark:text-primaryHoverDark">
                    Projects
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

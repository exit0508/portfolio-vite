import { Link } from "wouter";

const Header = () => {
  return (
    <header>
      <div className="lg:w-1/4 w- md:w-2/5 sm: w-2/3 rounded-full bg-white bg-white/90 backdrop-blur-lg">
        <div className="flex items-center justify-around py-3 px-5">
          <div>
            <ul className="flex items-center space-between gap-4">
              <li>
                <Link href="/">
                  <a className="text-black font-bold hover:text-black/60 active:text-secondary dark:text-primaryHoverDark">
                    Yurina Deguchi
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-black hover:text-black/60 active:text-secondary dark:text-primaryHoverDark">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-black hover:text-black/60 active:text-secondary dark:text-primaryHoverDark">
                    Projects
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

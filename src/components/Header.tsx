import { Link } from "wouter";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="lg:w-2/5 w- md:w-3/5 sm:w-2/3 rounded-full bg-white/70 dark:bg-bgDark/50 backdrop-blur-lg">
          <div className="flex flex-row items-center justify-between py-3 px-8 md:gap-5 sm:gap-2">
            <div className="flex gap-4">
              <div className="">
                <Link href="/">
                  <a className="text-black font-bold hover:text-black/60 active:text-secondary dark:text-primary hover:dark:text-white">
                    Yurina Deguchi
                  </a>
                </Link>
              </div>
              <ul className="flex items-center gap-4">
                <li>
                  <Link href="/about">
                    <a className="text-black hover:text-black/60 active:text-secondary dark:text-primary hover:dark:text-white">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a className="text-black hover:text-black/60 active:text-secondary dark:text-primary hover:dark:text-white">
                      Projects
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-end lg:mx-5 sm:mx-2">
              <div className="invisible text-xs mr-2 text-black/60 dark:text-white/60 lg:visible">
                Theme
              </div>{" "}
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

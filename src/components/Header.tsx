import { Link } from "wouter";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-3 rounded-full bg-white bg-white/90 backdrop-blur-lg">
      <div className="container px-10 py-3 flex items-center gap-8">
        <div className="text-xl">
          <Link href="/">
            <a className="text-secondary font-bold hover:text-primaryHover dark:text-primaryHoverDark">
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
        <div>
          <Button className="block rounded p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <AlignJustify />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Button } from "../components/ui/button";
import { GithubIcon, LucideLinkedin, LucideMail } from "lucide-react";

export function ButtonContact() {
  return (
    <div className="mt-5">
      <span>Let's connect me via below media!</span>
      <div className="flex items-center">
        <Button variant="ghost">
          <a href="mailto:exit.deguchi0508@gmail.com">
            <LucideMail />
          </a>
        </Button>
        <Button variant="ghost">
          <a href="https://www.linkedin.com/in/yurina-deguchi-88854074/">
            <LucideLinkedin />
          </a>
        </Button>
        <Button variant="ghost">
          <a href="https://github.com/exit0508">
            <GithubIcon />
          </a>
        </Button>
      </div>
    </div>
  );
}

const Title = () => {
  return (
    <>
      <h1 className="text-2xl">Yurina Deguchi</h1>
      <h2 className="text-xl">
        Aspiring designer and front-end developer passionate about creating in
        the Plureverse :)
      </h2>
      <div>
        <ButtonContact />
      </div>
    </>
  );
};

export default Title;

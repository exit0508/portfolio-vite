import { Button } from "../components/ui/button";
import { GithubIcon, LucideLinkedin, LucideMail } from "lucide-react";

export function ButtonContact() {
  return (
    <div className="flex flex-col">
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
    <div>
      <h1 className="text-3xl font-bold">Yurina Deguchi</h1>
      <h2 className="text-xl mt-2">
        Aspiring designer and front-end developer passionate about creating in
        the Pluriverse :)
      </h2>
      <div className="mt-3">
        <ButtonContact />
      </div>
    </div>
  );
};

export default Title;

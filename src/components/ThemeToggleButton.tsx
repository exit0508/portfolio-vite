import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/utils/themeContext";
import { Moon, Sun } from "lucide-react";
import { Theme } from "@/utils/themeContext";
import { FC } from "react";

type ThemeOption = {
  label: "Light" | "Dark";
  value: Theme;
  icon: FC<{ className?: string }>;
};

const themeOptions: ThemeOption[] = [
  { label: "Light", value: "light", icon: Sun },
  { label: "Dark", value: "dark", icon: Moon },
];

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  const currentTheme = themeOptions.find((option) => option.value === theme);

  if (!currentTheme) {
    return null;
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex content-center">
          <span className="flex items-center flex-row">
            <currentTheme.icon className="mr-2" />{" "}
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {themeOptions.map((option, index) => (
            <DropdownMenuItem
              key={`key-` + index}
              onClick={() => toggleTheme(option.value)}
            >
              <option.icon className="mr-2" /> {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeToggleButton;

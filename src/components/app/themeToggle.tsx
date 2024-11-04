import { Check, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const themeButtons = [
	{
		name: "Light",
		value: "light",
		icon: <SunIcon />,
	},
	{
		name: "Dark",
		value: "dark",
		icon: <MoonIcon />,
	},
	{
		name: "System",
		value: "system",
		icon: <SunIcon />,
	},
];

function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-700 dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{themeButtons.map((t) => (
					<DropdownMenuItem key={t.value} onClick={() => setTheme(t.value)}>
						<>
							{t.icon}
							<span>{t.name}</span>
							{theme === t.value && <Check className="ml-auto" />}
						</>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default ThemeToggle;

"use client";

import { BookAIcon, ListCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "../ui/sidebar";
import ThemeToggle from "./themeToggle";
import { useEffect, useState } from "react";

const sidebarLinks = [
	{
		label: "Classes",
		key: "classes",
		icon: <BookAIcon />,
		link: "/app/classes",
	},

	{
		label: "To-do",
		key: "todo",
		icon: <ListCheck />,
		link: "/app/todo",
	},
];

function AppSidebar() {
	const [currentPage, setCurrentPage] = useState<string>("");

	const pathname = usePathname();

	useEffect(() => {
		const _currentPage = pathname.split("/")[2];

		setCurrentPage(_currentPage);
	}, [pathname]);

	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex flex-row items-center justify-between">
					<p className="font-bold tracking-widest">{"{ PyCode }"}</p>
					<ThemeToggle />
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					{/* <SidebarGroupLabel></SidebarGroupLabel> */}
					<SidebarGroupContent>
						<SidebarMenu>
							{/* <SidebarMenuItem>
								<SidebarMenuButton asChild isActive>
									<Link href={"/app/dashboard"}>
										<LayoutDashboard /> Dashboard
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem> */}
							{sidebarLinks.map((l) => {
								const isActive = currentPage.toLowerCase() === l.key.toLowerCase();

								return (
									<SidebarMenuItem key={l.link}>
										<SidebarMenuButton asChild isActive={isActive}>
											<Link href={l.link}>
												{l.icon} {l.label}
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			{/* <SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href={"./settings"}>
								<Settings /> Settings
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter> */}
			<SidebarRail />
		</Sidebar>
	);
}

export default AppSidebar;

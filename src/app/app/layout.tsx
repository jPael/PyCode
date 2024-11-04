import Navbar from "@/components/app/navbar";
import AppSidebar from "@/components/app/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<SidebarProvider defaultOpen>
			<AppSidebar />
			<main className="w-full">
				<Navbar>
					<SidebarTrigger />
				</Navbar>
				<div className="">{children}</div>
			</main>
		</SidebarProvider>
	);
}

export default Layout;

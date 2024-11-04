"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import ProfileDropdown from "./profileDropDown";
import { Separator } from "../ui/separator";

function Navbar({ children }: Readonly<{ children: React.ReactNode }>) {
	const pathname = usePathname();
	const paths = pathname.split("/").slice(2);

	return (
		<div className="flex flex-row items-center w-full p-2 pr-5 border-b gap-2">
			{children}

			<Separator orientation="vertical" />

			<Breadcrumb>
				<BreadcrumbList>
					{paths.map((p, i) => (
						<React.Fragment key={p}>
							<BreadcrumbItem key={p}>
								<span className="capitalize text-xl font-semibold">{p}</span>
							</BreadcrumbItem>
							{i < paths.length - 1 && <BreadcrumbSeparator />}
						</React.Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>

			<div className="ml-auto">
				<ProfileDropdown />
			</div>
		</div>
	);
}

export default Navbar;

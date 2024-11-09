"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Separator } from "../ui/separator";
import ClassDropdown from "./classDropdown";
import ProfileDropdown from "./profileDropDown";

function Navbar({ children }: Readonly<{ children: React.ReactNode }>) {
	const [showNavbarActions, setShowNavbarActions] = useState(true);

	const pathname = usePathname();
	const paths = pathname.split("/").slice(2);

	useEffect(() => {
		if (paths.length > 1) {
			setShowNavbarActions(false);
			return;
		}

		if (paths[0] != "classes") {
			setShowNavbarActions(false);
			return;
		}

		setShowNavbarActions(true);
	}, [paths]);

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

			<div className="flex flex-row gap-4 ml-auto items-center">
				{showNavbarActions && <ClassDropdown />}
				<ProfileDropdown />
			</div>
		</div>
	);
}

export default Navbar;

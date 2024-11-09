"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

function ProfileDropdown() {
	const user = useCurrentUser();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="w-fit h-fit border-2 border-black rounded-full">
					<Avatar>
						<AvatarImage src={user?.image ?? "/"} />
					</Avatar>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				{/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href={"./profile"} className="w-full">
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={"./settings"} className="w-full">
						Settings
					</Link>
				</DropdownMenuItem> */}
				<DropdownMenuItem asChild className="mt-4">
					<Button
						variant={"destructive"}
						size={"menuItem"}
						className="w-full"
						onClick={async () => await signOut()}
					>
						Log out
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default ProfileDropdown;

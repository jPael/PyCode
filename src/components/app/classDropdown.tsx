"use client";

import { Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import CreateClassButton from "./createClassButton";
import JoinClassButton from "./joinClassButton";

function ClassDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="h-full rounded-full">
				<div className="aspect-square h-full ">
					<Plus />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="flex flex-col gap-1">
				<JoinClassButton />
				<CreateClassButton />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default ClassDropdown;

import React from "react";
import { Button } from "../ui/button";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function JoinClassButton() {
	return (
		<DropdownMenuItem asChild>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="ghost" className="w-full">
						Join class
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Join class</DialogTitle>
						<DialogDescription>Enter the class code to join</DialogDescription>
					</DialogHeader>
					<div className="flex flex-col gap-3 my-5">
						<Label>Class code</Label>
						<Input type="text" />
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant={"ghost"}>Cancel</Button>
						</DialogClose>
						<Button>Join</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</DropdownMenuItem>
	);
}

export default JoinClassButton;

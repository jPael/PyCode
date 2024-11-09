"use client";

import { createClass } from "@/actions/class";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { CreateClassSchema } from "@/schemas";
import { ProcessDialogProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
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
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { LoadingSpinner } from "./spinner";

function CreateClassButton() {
	const user = useCurrentUser();

	const [dialogOpen, setDialogOpen] = useState(false);
	const [processingOpen, setProcessingOpen] = useState(false);
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof CreateClassSchema>>({
		resolver: zodResolver(CreateClassSchema),
		defaultValues: {
			name: "",
			section: "",
			room: "",
			subject: "",
		},
	});

	const handleDialogOpen = (open: boolean) => {
		if (isPending) return;

		if (!open) {
			form.reset();
		}
		setDialogOpen(open);
	};

	const handleSubmit = async (values: z.infer<typeof CreateClassSchema>) => {
		setSuccess(undefined);
		setError(undefined);
		setProcessingOpen(true);

		if (!user?.id) {
			setError("Something went wrong. Please refresh your browser and try again.");
			return;
		}

		startTransition(() => {
			createClass(user?.id ?? "", values)
				.then((d) => {
					if (d?.error) {
						setError(d?.error);
					}
					setSuccess(d.success);
				})
				.catch(() => setError("Something went wrong. Please try again later"));
		});
	};

	return (
		<DropdownMenuItem asChild>
			<Dialog open={dialogOpen} onOpenChange={handleDialogOpen}>
				<DialogTrigger asChild>
					<Button variant="ghost" className="w-full">
						Create class{" "}
					</Button>
				</DialogTrigger>

				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create class</DialogTitle>
						<DialogDescription>Please fill out the necessary information</DialogDescription>
					</DialogHeader>

					{processingOpen && (
						<ProcessingDialog
							error={error}
							success={success}
							onOpenChange={setProcessingOpen}
							isPending={isPending}
							handleCLoseParentDialog={handleDialogOpen}
						/>
					)}

					{!processingOpen && (
						<Form {...form}>
							<form onSubmit={form.handleSubmit(handleSubmit)}>
								<div className="flex flex-col gap-2 py-5">
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Class name</FormLabel>
												<FormControl>
													<Input {...field} disabled={isPending} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="section"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Section</FormLabel>
												<FormControl>
													<Input {...field} disabled={isPending} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="subject"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Subject</FormLabel>
												<FormControl>
													<Input {...field} disabled={isPending} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="room"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Room</FormLabel>
												<FormControl>
													<Input {...field} disabled={isPending} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<DialogFooter>
									<DialogClose asChild>
										<Button variant={"ghost"} disabled={isPending}>
											Cancel
										</Button>
									</DialogClose>
									<Button type="submit" disabled={isPending}>
										{isPending && <LoadingSpinner size={68} />}
										{!isPending && "Create"}
									</Button>
								</DialogFooter>
							</form>
						</Form>
					)}
				</DialogContent>
			</Dialog>
		</DropdownMenuItem>
	);
}

export default CreateClassButton;

function ProcessingDialog({
	error,
	success,
	onOpenChange,
	handleCLoseParentDialog,
	isPending,
}: Readonly<ProcessDialogProps>) {
	const handleClose = () => {
		if (isPending) return;

		onOpenChange(false);
		handleCLoseParentDialog(false);
	};

	return (
		<div className="flex flex-col ">
			<div className="flex flex-col gap-3 py-10 items-center justify-center">
				{!error && !success && <LoadingSpinner size={50} />}
				{!error && success && (
					<>
						<Check size={50} color="#26b000" />
						<p>{success}</p>
					</>
				)}

				{!success && error && (
					<>
						<X size={50} color="#d10000" />
						<p>{error}</p>
					</>
				)}
			</div>
			<div className=" flex flex-row gap-2 justify-end w-full">
				<Button onClick={handleClose}>Close</Button>
			</div>
		</div>
	);
}

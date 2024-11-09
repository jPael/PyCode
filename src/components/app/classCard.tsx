"use client";

import { ClassCardPropTypes } from "@/types";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { DateTime } from "luxon";
import { useCurrentUser } from "@/hooks/useCurrentUser";

function ClassCard({ details }: Readonly<ClassCardPropTypes>) {
	const user = useCurrentUser();

	const { id, name, owner, posts, room, section, subject } = details;

	const avatarFallbackValue = (owner.name ?? "").split(" ")[0].charAt(0).toUpperCase();

	const classLink = `./classes/${id}`;

	return (
		<Card className="flex flex-col max-w-[30%] min-w-[350px] max-h-[400px] bg-card  ">
			<CardHeader>
				<CardTitle>
					<Link href={classLink}> {name}</Link>
				</CardTitle>
				<CardDescription className="flex flex-row gap-2 items-center">
					<span>{section}</span> |<span>{room}</span> |<span>{subject}</span> |
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2 flex-1">
				{posts.map((p) => {
					const activityLink = `${classLink}/${p.id}`;

					return (
						<Link href={activityLink} key={p.createdAt.toString()}>
							<div className=" flex flex-col gap-1 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer p-2 rounded-md ">
								<div className="flex flex-row justify-between items-center">
									<p className="font-semibold">{p.title}</p>
									<p className="text-xs text-muted-foreground">
										{DateTime.fromJSDate(p.createdAt).toLocaleString()}
									</p>
								</div>
								<p className="line-clamp-1 text-ellipsis text-xs">{p.instructions}</p>
								<p className="line-clamp-1 text-ellipsis text-xs mt-2">
									Due in{" "}
									<span className="font-semibold">
										{DateTime.fromJSDate(p.due).toLocaleString(DateTime.DATE_MED)}
									</span>
								</p>
							</div>
						</Link>
					);
				})}
			</CardContent>
			<CardFooter className=" ">
				<div className="flex-1 flex flex-row items-center gap-2 h-full ">
					{user?.id === owner?.id ? (
						<p>Owned</p>
					) : (
						<>
							<Avatar className=" border border-black">
								<AvatarImage src={owner.image ?? ""} />
								<AvatarFallback> {avatarFallbackValue}</AvatarFallback>
							</Avatar>
							<span className="text-sm font-semibold">{owner.name}</span>
						</>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}

export default ClassCard;

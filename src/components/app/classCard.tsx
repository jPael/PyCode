import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface ClassCardPropTypes {
	details: {
		title: string;
		classLink: string;
		time: string;
		day: string;
		contents: Content[];
		teacher: string;
	};
}

interface Content {
	title: string;
	content?: string;
	createdAt: string;
}

function ClassCard({ details }: Readonly<ClassCardPropTypes>) {
	const { title, time, day, contents, teacher, classLink } = details;
	const avatarFallbackValue = teacher.split(" ")[0].charAt(0).toUpperCase();

	return (
		<Card className="flex flex-col max-w-[30%] min-w-[350px] max-h-[400px] bg-card">
			<CardHeader>
				<CardTitle>
					<Link href={classLink}> {title}</Link>
				</CardTitle>
				<CardDescription className="flex flex-row gap-2">
					<span>{time}</span>
					<span>{day}</span>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2 flex-1">
				{contents.map((c) => (
					<div className="text-sm hover:bg-neutral-950 cursor-pointer p-2 rounded-md " key={c.createdAt}>
						<p className="font-semibold">{c.title}</p>
						<p className="line-clamp-1 text-ellipsis text-xs">{c.content}</p>
						<p>{c.createdAt}</p>
					</div>
				))}
			</CardContent>
			<CardFooter className=" border-t  ">
				<div className="flex-1 flex flex-row items-center gap-2 h-full ">
					<Avatar className=" border border-black">
						<AvatarImage src="https://avatar.iran.liara.run/public" />
						<AvatarFallback> {avatarFallbackValue}</AvatarFallback>
					</Avatar>
					<span className="text-sm font-semibold">{teacher}</span>
				</div>
			</CardFooter>
		</Card>
	);
}

export default ClassCard;

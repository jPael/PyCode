import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ActivityCardProps } from "@/types";
import { DateTime } from "luxon";

function ActivityCard({ data }: Readonly<ActivityCardProps>) {
	return data.map((p) => {
		const activityLink = `./class/${p.id}`;

		return (
			<div className="flex flex-col gap-5 px-6 pt-3 pb-6  border rounded-md " key={p.id}>
				<div className="flex flex-row justify-between items-center">
					<Link href={activityLink}>
						<Button variant="link" size={"lg"} asChild className="text-2xl px-0">
							<p>{p.title}</p>
						</Button>
					</Link>
					<p className="text-muted-foreground">{DateTime.fromJSDate(p.due).toLocaleString(DateTime.DATE_MED)}</p>
				</div>
				<div className="flex flex-col max-w-[90%]">
					<p className="text-sm h-auto text-ellipsis line-clamp-2	">{p.instructions}</p>
				</div>
			</div>
		);
	});
}

export default ActivityCard;

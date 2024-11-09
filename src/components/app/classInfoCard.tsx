import { ClassInfoCardProps } from "@/types";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ClassInfoCard({ data }: Readonly<ClassInfoCardProps>) {
	// return <div className="flex flex-col gap-5 px-6 pt-3 pb-6  border rounded-md">

	// </div>;

	const { name, owner, room, section, subject } = data;

	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<div className="flex flex-row justify-between items-center">
						<p>
							{name} - {subject}
						</p>
					</div>
				</CardTitle>
				<CardDescription>
					<div className="flex flex-col">
						<p>
							{section} - {room}
						</p>
					</div>
				</CardDescription>
			</CardHeader>

			<CardFooter>
				<div className="flex flex-col  gap-3">
					<p className="text-xs text-muted-foreground">Owned by:</p>
					<div className="flex flex-row gap-4 items-center">
						<Avatar>
							<AvatarImage src={owner.image ?? ""} />
							<AvatarFallback>{owner.name}</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<p>{owner.name}</p>
							<p className="text-xs text-muted-foreground">{owner.email}</p>
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}

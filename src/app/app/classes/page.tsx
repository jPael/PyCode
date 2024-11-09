import { getAllClassesByEmail } from "@/actions/class";
import ClassCard from "@/components/app/classCard";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getServerUserSession } from "@/data/user";
import { AlertTriangle } from "lucide-react";

async function Page() {
	const user = await getServerUserSession();

	if (!user?.email) return <ErrorPrompt />;

	const classes = await getAllClassesByEmail(user?.email).then((d) => {
		return d.data;
	});

	if (!classes) return <ErrorPrompt />;

	return (
		<div className="flex flex-row flex-wrap gap-5 p-3">
			{classes.ownedClasses?.map((c) => {
				return <ClassCard details={c} key={c.id} />;
			})}
			{classes.joinedClasses?.map((c) => {
				return <ClassCard details={c} key={c.id} />;
			})}
		</div>
	);
}

export default Page;

function ErrorPrompt() {
	return (
		<div className="flex flex-col items-center gap-5 py-[20dvh]  w-full h-full text-red-600 ">
			<Card className="text-red-600 max-w-[40dvw]">
				<CardHeader>
					<CardTitle className="flex flex-row gap-2 items-center">
						<AlertTriangle size={40} />
						Error
					</CardTitle>
					<CardDescription>
						There was an error when fetching your classes. Please refresh your browser or try again later
					</CardDescription>
				</CardHeader>
			</Card>
		</div>
	);
}

import { AlertTriangle } from "lucide-react";

export default function ClassInfoCardError() {
	return (
		<div className="flex flex-col gap-5 px-6 pt-3 pb-6  border rounded-md min-h-52 items-center justify-center text-red-500">
			<AlertTriangle />
			<p>There was an error fetching the class data</p>
		</div>
	);
}

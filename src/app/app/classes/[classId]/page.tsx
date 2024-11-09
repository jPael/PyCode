import { getClassById } from "@/actions/class";
import ActivityCard from "@/components/app/activityCard";
import ActivityCardError from "@/components/app/activityCardError";
import ClassInfoCard from "@/components/app/classInfoCard";
import ClassInfoCardError from "@/components/app/classInfoCardError";

async function Class({ params }: Readonly<{ params: Promise<{ classId: string }> }>) {
	const p = await params;
	const { classId } = p;

	const classData = await getClassById(classId);

	return (
		<div className="grid grid-cols-6 p-3 gap-3  ">
			<div className="col-span-4 ">
				{classData.posts ? <ActivityCard data={classData.posts} /> : <ActivityCardError />}
			</div>
			<div className="col-span-2 h-full ">
				{classData?.class ? <ClassInfoCard data={classData.class} /> : <ClassInfoCardError />}
			</div>
		</div>
	);
}

export default Class;

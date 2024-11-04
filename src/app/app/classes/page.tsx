import ClassCard from "@/components/app/classCard";

function Page() {
	const classLists = [
		{
			title: "Thesis Writing 1",
			classLink: "./classes/classid",
			time: "2:30PM - 4:00PM",
			day: "Mon",
			contents: [
				{
					title: "Endorsement for Hardbound",
					content:
						"Attached is the template, re: Endorsement for Hardbound. Kindly download and complete this form should you have submitted already the clean and final copy of your Thesis Manuscript. I just would like to remind you as well that the posting of grades shall only be until Thursday, May 30, 2024, for inclusion in the candidates, as per the memorandum issued by the VPAA. Please be guided. Note: For those group(s) who are my advisees, no need to include the approved section to avoid duplication. Thanks.",
					createdAt: "May 27",
				},
				{
					title: "Submission of Chapters 1-3_Final Copy",
					content:
						"Dear All, Kindly upload the Final Copy of Chapters 1-3 of your Thesis work. Please ensure that the manuscript has been reviewed, refined, and enhanced by your grammarian. Be guided accordingly.",
					createdAt: "Mar 3",
				},
			],
			teacher: "Melbrick Alba Evallar",
		},
		{
			title: "Class 1 - 3CSC",
			classLink: "./classes/someclass",
			time: "5:00PM - 6:00PM",
			day: "Mon - Fri",
			contents: [
				{
					title: "QUIZ (12/2/22)",
					content: "ass",
					createdAt: "Dec 1, 2022",
				},
			],
			teacher: "Cherly Sardovia",
		},
	];

	return (
		<div className="flex flex-row flex-wrap gap-5 ">
			{classLists.map((c) => (
				<ClassCard details={c} key={c.classLink} />
			))}
		</div>
	);
}

export default Page;

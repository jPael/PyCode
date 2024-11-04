import CodingPanel from "@/components/app/codingPanel";
import InstructionPanel from "@/components/app/instructionPanel";

function Page() {
	return (
		<div className="grid grid-cols-6 h-[90dvh] overflow-hidden">
			<InstructionPanel />
			<CodingPanel />
		</div>
	);
}

export default Page;

import { File } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

export default function InstructionPanel() {
	return (
		<div className="h-full col-span-3 flex flex-col gap-6  ">
			<ScrollArea className="h-[90dvh] p-3" scrollHideDelay={3000}>
				<div className="flex flex-row gap-2 items-center justify-between w-full">
					<p className="text-2xl">Breadth-first search algorithm</p>
					<p className="text-sm text-muted-foreground">Oct 30</p>
				</div>
				<div className="flex flex-col gap-6 mt-3">
					<p>
						Given a connected undirected graph represented by an adjacency list adj, which is a vector of vectors
						where each adj[i] represents the list of vertices connected to vertex i. Perform a Breadth First
						Traversal (BFS) starting from vertex 0, visiting vertices from left to right according to the
						adjacency list, and return a list containing the BFS traversal of the graph.
					</p>
					<div className="  max-h-60 min-h-52 m-14  border-white relative p-16">
						<Image
							src={"/BFS_example.jpg"}
							alt="Breadth-First search example"
							fill
							className="h-[90%] w-[90%] aspect-square"
						/>
					</div>
					<div className="w-fit p-3  border rounded-md flex flex-row gap-2 items-center">
						<File className="w-9 h-9" strokeWidth={1} />
						<div className="flex flex-col  ">
							<p>Filename.exe</p>
							<p
								title="somasdasdgaskjhdkahjsgdhkjagsdkhjelinks.google.com"
								className="text-xs w-full max-w-40 truncate  text-nowrap"
							>
								somasdasdgaskjhdkahjsgdhkjagsdkhjelinks.google.com
							</p>
						</div>
					</div>
				</div>
			</ScrollArea>
		</div>
	);
}

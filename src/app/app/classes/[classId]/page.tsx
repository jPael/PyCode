import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import React from "react";

function Class() {
	return (
		<div className="grid grid-cols-6   ">
			<div className="col-span-4 p-5">
				<ActivityCard />
			</div>
			<div className="col-span-2 h-full border">class info</div>
		</div>
	);
}

export default Class;

function ActivityCard() {
	return (
		<div className="flex flex-col gap-5 px-6 pt-3 pb-6  border rounded-md ">
			<div className="flex flex-row justify-between items-center">
				<Link href={"./class/12312798"}>
					<Button variant="link" size={"lg"} asChild className="text-2xl">
						<p>New Activity: Breadth-first search algorithm</p>
					</Button>
				</Link>
				<p className="text-muted-foreground">Oct 30</p>
			</div>
			<div className="flex flex-col max-w-[90%]">
				<p className="text-sm h-auto text-ellipsis line-clamp-2	">
					Given a connected undirected graph represented by an adjacency list adj, which is a vector of vectors
					where each adj[i] represents the list of vertices connected to vertex i. Perform a Breadth First
					Traversal (BFS) starting from vertex 0, visiting vertices from left to right according to the adjacency
					list, and return a list containing the BFS traversal of the graph.
				</p>
			</div>
		</div>
	);
}

import { $Enums, Prisma } from "@prisma/client";

export interface ProcessDialogProps {
	error?: string;
	success?: string;
	onOpenChange: (open: boolean) => void;
	handleCLoseParentDialog: (open: boolean) => void;
	isPending: boolean;
}

export interface ClassCardPropTypes {
	details: {
		id: string;
		name: string;
		section: string;
		subject: string;
		room: string;
		code: string;
		posts: Posts[];
		owner: Owner;
	};
}

interface Posts {
	id: string;
	title: string;
	instructions: string;
	points: number;
	due: Date;
	type: $Enums.PostType;
	createdAt: Date;
}

interface Owner {
	id: string | undefined;
	name: string | null;
	image: string | null;
	email: string;
}

export type ClassType = Prisma.ClassGetPayload<{
	select: {
		id: true;
		name: true;
		section: true;
		subject: true;
		room: true;
		code: true;
		posts: {
			select: {
				id: true;
				title: true;
				instructions: true;
				points: true;
				due: true;
				type: true;
				createdAt: true;
				author: {
					select: {
						name: true;
						image: true;
						email: true;
					};
				};
			};
		};
		owner: {
			select: {
				name: true;
				image: true;
				id: true;
				email: true;
			};
		};
	};
}>;

export interface ClassInfoCardProps {
	data: {
		code: string;
		id: string;
		name: string;
		owner: Owner;
		room: string;
		section: string;
		subject: string;
	};
}

export interface ActivityCardProps {
	data: Posts[];
}

export type createClassDataType = {
	name: string;
	section: string;
	subject: string;
	room: string;
	code: string;
	userId: string;
};

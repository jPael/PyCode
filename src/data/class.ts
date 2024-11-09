import db from "@/lib/db";
import { ClassType, createClassDataType } from "@/types";

export async function getClassDataById(id: string) {
	if (!id) return null;

	const classData = await db.class.findUnique({
		where: {
			id,
		},
		select: {
			code: true,
			id: true,
			name: true,
			room: true,
			section: true,
			subject: true,
			owner: {
				select: {
					id: true,
					name: true,
					image: true,
					email: true,
				},
			},
			posts: {
				select: {
					id: true,
					title: true,
					instructions: true,
					points: true,
					due: true,
					type: true,
					createdAt: true,
				},
			},
		},
	});

	return classData;
}

export async function getOwnedClassesDataById(id: string) {
	if (!id) return;

	const classes = await db.class.findMany({
		where: {
			owner: {
				id,
			},
		},
		select: {
			id: true,
			name: true,
			section: true,
			subject: true,
			room: true,
			code: true,
			posts: {
				select: {
					id: true,
					title: true,
					instructions: true,
					points: true,
					due: true,
					type: true,
					createdAt: true,
					author: {
						select: {
							name: true,
							image: true,
							email: true,
						},
					},
				},
			},
			owner: {
				select: {
					name: true,
					image: true,
					id: true,
					email: true,
				},
			},
		},
	});

	return classes;
}

export async function getJoinedClassesDataById(id: string) {
	if (!id) return;

	const classes = await db.userOnClass.findMany({
		where: {
			userId: id,
		},
		select: {
			class: {
				select: {
					id: true,
					name: true,
					section: true,
					subject: true,
					room: true,
					code: true,
					posts: {
						select: {
							id: true,
							title: true,
							instructions: true,
							points: true,
							due: true,
							type: true,
							createdAt: true,
							author: {
								select: {
									name: true,
									image: true,
									email: true,
								},
							},
						},
					},
					owner: {
						select: {
							name: true,
							image: true,
							email: true,
							id: true,
						},
					},
				},
			},
		},
	});

	const class_clean: ClassType[] = [];

	classes.forEach((c) => class_clean.push(c.class));

	return class_clean;
}

export async function getAllClassesCode() {
	const classes = await db.class.findMany({
		select: {
			code: true,
		},
	});

	return classes;
}

export async function createClassData(data: createClassDataType) {
	const { name, section, subject, room, code, userId } = data;

	await db.class.create({
		data: {
			name,
			section,
			subject,
			room,
			code,
			owner: {
				connect: {
					id: userId,
				},
			},
		},
	});
}

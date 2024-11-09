"use server";

import {
	createClassData,
	getAllClassesCode,
	getClassDataById,
	getJoinedClassesDataById,
	getOwnedClassesDataById,
} from "@/data/class";
import { getUserByEmail } from "@/data/user";
import { CreateClassSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import randomstring from "randomstring";
import { z } from "zod";

export async function createClass(userId: string, values: z.infer<typeof CreateClassSchema>) {
	const { name, section, subject, room } = values;

	if (!userId && !name && !section && !subject && !room) {
		return { error: "Some fields are left empty. Please fill out all of the required field" };
	}

	const classes = await getAllClassesCode();

	let code = "";
	while (true) {
		const _code = randomstring.generate(7);

		const hasCollision = classes.some((c) => c.code === _code);

		if (!hasCollision) {
			code = _code;
			break;
		}
	}

	await createClassData({
		name,
		section,
		subject,
		room,
		code,
		userId,
	});

	revalidatePath("/");

	return { success: "Class created" };
}

export async function getAllClassesByEmail(email: string) {
	if (!email) return { error: "Credentials is empty." };

	const user = await getUserByEmail(email);

	if (!user?.id) return { error: "There are no user associated with the email" };

	const ownedClasses = await getOwnedClassesDataById(user.id);

	const joinedClasses = await getJoinedClassesDataById(user.id);

	return { success: "Classes retreived successfully", data: { ownedClasses, joinedClasses } };
}

export async function getClassById(id: string) {
	if (!id) return { error: "Invalid credentials" };

	const classData = await getClassDataById(id);

	if (!classData) return { error: "Class doesn't exists" };

	return {
		class: {
			code: classData.code,
			id: classData.id,
			name: classData.name,
			owner: classData.owner,
			room: classData.room,
			section: classData.section,
			subject: classData.subject,
		},
		posts: [...classData.posts],
	};
}

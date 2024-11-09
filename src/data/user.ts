import { auth } from "@/auth";
import db from "@/lib/db";

export async function getServerUserSession() {
	const session = await auth();

	return session?.user;
}

export async function getUserByEmail(email: string) {
	if (!email) return;

	const user = await db.user.findFirst({
		where: {
			email,
		},
		select: {
			id: true,
		},
	});

	return user;
}

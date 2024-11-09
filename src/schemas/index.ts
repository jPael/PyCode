import { z } from "zod";

export const CreateClassSchema = z.object({
	name: z.string().min(1, "Name is required"),
	section: z.string().min(1, "Section is required"),
	subject: z.string().min(1, "Subject is required"),
	room: z.string().min(1, "Room is required"),
});

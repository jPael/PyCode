import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ThemeProvider } from "./provider/themeProvider";

const MontserratFont = Montserrat({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "PyCode | Coding LMS of NEMSU",
	description: "PyCode | Coding LMS of NEMSU",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();

	return (
		<html lang="en">
			<body className={cn(MontserratFont.className, "antialiased")}>
				<SessionProvider session={session}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
}

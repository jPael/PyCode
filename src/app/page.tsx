import Navbar from "@/components/landingPage/navbar";
import SigninButton from "@/components/landingPage/signin";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const heroFont = Montserrat({
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-background relative ">
			<Navbar />
			<main className="flex flex-col items-center flex-1   ">
				<section className="flex flex-col min-h-screen ">
					<div className={cn("grid place-items-center space-y-7 w-full h-full pt-[15%]", heroFont.className)}>
						<p className="text-8xl font-extrabold text-primary"> {"{ PyCode }"}</p>
						<p className="text-3xl font-semibold text-primary/80">
							A LLM-Based Coding LMS of{" "}
							<span className="underline  underline-offset-8 ">North Eastern Mindanao State University</span>
						</p>
					</div>
					<div className="flex flex-col space-y-5 mt-[10%] justify-center items-center">
						<p className="text-primary text-2xl">Start coding</p>
						<SigninButton />
					</div>

					<div className="flex flex-col mt-auto justify-center items-center py-5">
						<p>Copyright © 2024 PyCode</p>
					</div>
				</section>
			</main>
		</div>
	);
}

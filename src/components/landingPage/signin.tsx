import { signIn } from "@/auth";
import Image from "next/image";
import { Button } from "../ui/button";

function SigninButton() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google");
			}}
		>
			<Button type="submit" size={"lg"} variant="outline">
				<div className="flex flex-row relative justify-center items-center gap-2 py-3 my-3">
					<Image priority src={"/google_logo.svg"} height={32} width={32} alt="Google logo" />
					<span>Sign in with Google</span>
				</div>
			</Button>
		</form>
	);
}

export default SigninButton;

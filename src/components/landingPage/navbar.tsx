import Image from "next/image";

function Navbar() {
	return (
		<div className="h-20 fixed top-0 left-0 right-0 px-10 py-3 bg-background flex flex-row items-center gap-3 border-b">
			<div className="h-full  aspect-square relative">
				<Image alt="NEMSU logo" src={"/NEMSU.png"} fill />
			</div>
			<p className=" text-xl text-primary font-semibold">{"{ PyCode }"}</p>
		</div>
	);
}

export default Navbar;

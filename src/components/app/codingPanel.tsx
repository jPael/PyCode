"use client";

import { python } from "@codemirror/lang-python";
import CodeMirror from "@uiw/react-codemirror";
import type { Extension } from "@codemirror/state";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";

export default function CodingPanel() {
	const IDE = useRef(null);
	const { theme } = useTheme();

	useEffect(() => {
		const editorElement = IDE.current?.editor.wrapperElement;
		console.log(editorElement);
		if (!editorElement) return;
		const backgroundColor = window.getComputedStyle(editorElement).getPropertyValue("background-color");

		console.log("Code Mirror bg color: ", backgroundColor);
	}, [IDE]);

	return (
		<div className=" col-span-3 border h-full overflow-y-scroll ">
			<div className="">
				<CodeMirror ref={IDE} height="400" extensions={[python()]} theme={theme as unknown as Extension} />
			</div>
		</div>
	);
}

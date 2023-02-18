import React, { useEffect, useRef, useState } from "react";

import "./style.css";

const SoundWave = ({ progress, isPlaying }) => {
	const [animationTimings, setAnimationsTimings] = useState([]);
	const ref = useRef();

	useEffect(() => {
		const timings = [];
		for (let i = 0; i < 90; i++) {
			timings.push(Math.floor(Math.random() * 1000) + 500 + "ms");
		}
		setAnimationsTimings(timings);
	}, []);

	const createLines = () => {
		const progressNum = Math.floor(progress / 2);
		const lines = [];
		let y1 = 20;
		let y2 = 0;
		for (let i = 1; i < 91; i++) {
			lines.push(
				<line
					key={i}
					className={i <= progressNum ? "sw__full" : ""}
					x1={i + i * 6}
					y1={y1}
					x2={i + i * 6}
					y2={y2}
					strokeWidth="6"
					style={{ animationDuration: animationTimings[i] }}
				/>
			);
		}

		return lines;
	};

	return (
		<div className={`sw${isPlaying ? "" : " sw--pause"}`}>
			<svg
				ref={ref}
				width="302"
				height="28"
				viewBox="0 0 344 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{createLines()}
			</svg>
		</div>
	);
};

export default SoundWave;

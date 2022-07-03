import { useSpring, animated } from "react-spring";
import "./App.sass";

const App = () => {
	const createPolygonInCircle = (
		x_center,
		y_center,
		radius,
		countOfParties,
		rotate = false
	) => {
		let path = `M`,
			V_ix,
			V_iy;
		for (let part = 1; part <= countOfParties; part++) {
			V_ix =
				x_center +
				radius *
					(rotate
						? Math.cos((2 * part * Math.PI) / countOfParties)
						: Math.sin((2 * part * Math.PI) / countOfParties));
			V_iy =
				y_center +
				radius *
					(rotate
						? Math.sin((2 * part * Math.PI) / countOfParties)
						: Math.cos((2 * part * Math.PI) / countOfParties));
			path += `${V_ix.toFixed(1)},${V_iy.toFixed(1)} `;
		}
		path += "z";
		return path;
	};

	const config = {
		loadingDelay: {
			duration: 20000,
		},
	};

	const loader = useSpring({
		from: { strokeDashoffset: 1445 },
		to: { strokeDashoffset: 0 },
		config: config.loadingDelay,
	});

	const dotted = useSpring({
		from: { transform: `rotate(0deg)` },
		to: { transform: `rotate(360deg)` },
		config: { duration: 6000 },
		loop: false,
	});

	const { number } = useSpring({
		from: { number: 0 },
		to: { number: 100 },
		config: config.loadingDelay,
	});

	return (
		<main>
			<div className="App">
				<div className="cells"></div>
			</div>
			<div className="loading">
				<svg viewBox="0 0 500 500">
					<animated.circle
						style={loader}
						className="loader"
						r="230"
						cx="250"
						cy="250"
					/>
					<animated.circle
						style={dotted}
						className="dotted"
						r="200"
						cx="250"
						cy="250"
					/>
					<circle className="dottedInset" r="190" cx="250" cy="250" />
					<path
						d="M345.0,414.5 250.0,320.0 155.0,414.5 189.4,285.0 60.0,250.0 189.4,215.0 155.0,85.5 250.0,180.0 345.0,85.5 310.6,215.0 440.0,250.0 310.6,285.0z"
						className="hexagonInHexagon"
					/>
					<path
						d="M325,379.9 250,350 175,379.9 163.4,300 100,250 163.4,200 175,120.1 250,150 325,120.1 336.6,200 400,250 336.6,300z"
						className="hexagonInHexagon"
					/>
					<path
						d="M380,250 250,120 120,250 250,380z"
						className="rect"
					/>
					<path
						d="M250.0,365.0 135.0,250.0 250.0,135.0 365.0,250.0 z"
						className="rectInRect"
					/>
					<path
						d="M332.3,202.5 167.7,202.5 250.0,345.0 z"
						className="rectInRect"
					/>
					<path
						d="M332.3,202.5 167.7,202.5 250.0,345.0 z"
						style={{
							transform: "rotate(180deg)",
							transformOrigin: "center",
						}}
						className="rectInRect"
					/>
					<path
						d="M289.0,227.5 211.0,227.5 250.0,295.0 z"
						className="rectInRect"
					/>
					<circle
						r="40"
						cx="250"
						cy="250"
						fill="none"
						stroke="rgba(0,0,0,0.5)"
						strokeWidth="3px"
					/>
					<circle
						r="5"
						cx="250"
						cy="250"
						fill="none"
						stroke="rgba(0,0,0,0.5)"
						strokeWidth="3px"
					/>
					<g>
						<line
							x1="245"
							y1="291"
							x2="250"
							y2="345"
							stroke="rgba(256,256,256,0.5)"
							className="bottomLinesLeft"
						/>
						<line
							x1="250"
							y1="291"
							x2="250"
							y2="345"
							stroke="rgba(256,256,256,0.5)"
							className="bottomLinesCentral"
						/>
						<line
							x1="255"
							y1="291"
							x2="250"
							y2="345"
							stroke="rgba(256,256,256,0.5)"
							className="bottomLinesRight"
						/>
					</g>
					<g>
					<line
						x1="332.3"
						y1="202.5"
						x2="284"
						y2="224.5"
						stroke="rgba(256,256,256,0.5)"
						className="bottomLinesLeft"
					/>
					<line
						x1="332.3"
						y1="202.5"
						x2="286"
						y2="228.5"
						stroke="rgba(256,256,256,0.5)"
						className="bottomLinesCentral"
					/>
					<line
						x1="332.3"
						y1="202.5"
						x2="288"
						y2="232.5"
						stroke="rgba(256,256,256,0.5)"
						className="bottomLinesRight"
					/>
					</g>
				</svg>
				<div className="loadingText">
					<div>Loading</div>
					<div>
						<animated.div>
							{number.to((n) =>
								n === 100 ? n.toFixed(0) : n.toFixed(1)
							)}
						</animated.div>
						%
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;

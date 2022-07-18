import { useEffect, useState } from "react";
import dice from "./images/icon-dice.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
function App() {
	const [quotes, setQuotes] = useState("");
	const fetchData = () => {
		fetch("https://api.adviceslip.com/advice")
			.then((response) => response.json())
			.then((data) => {
				setQuotes(data.slip);
				console.log(data);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div class="container">
			<h1 class="title">Advice #{quotes.id} </h1>
			<p class="text">{quotes.advice}</p>

			<picture>
				<source media="(min-width: 768px)" srcset={dividerDesktop} />
				<img src={dividerMobile} alt="divider" />
			</picture>

			<div>
				<button onClick={() => fetchData()}>
					<img src={dice} alt="" />
				</button>
			</div>
		</div>
	);
}

export default App;

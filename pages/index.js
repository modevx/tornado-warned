import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Home = () => {
	const [alerts, setAlerts] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await axios.get("https://jsonplaceholder.typicode.com/users");
	// 		console.log(res.data);
	// 		setAlerts(res.data);
	// 	};

	// 	fetchData();
	// }, []);

	return (
		<main classNamestyle={{ backgroundColor: "#222", color: "#fff" }}>
			<Navbar />
			<section id='land' style={{ height: "100vh" }}></section>
			<section id='alerts' style={{ height: "100vh" }}>
				<h2>Alerts</h2>
			</section>
			<section id='radar' style={{ height: "100vh" }}>
				<h2>Radar</h2>
			</section>
			<section id='stats' style={{ height: "100vh" }}>
				<h2>Stats</h2>
			</section>

			{/* {alerts &&
				alerts.map(user => (
					<Alert
						key={user.id}
						variant='danger'
						style={{ margin: "1rem auto", width: "50%" }}
					>
						{user.name}
					</Alert>
				))} */}
		</main>
	);
};

export default Home;

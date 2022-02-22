import { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import axios from "axios";

const Home = () => {
	const [alerts, setAlerts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("https://jsonplaceholder.typicode.com/users");
			console.log(res.data);
			setAlerts(res.data);
		};

		fetchData();
	}, []);

	return (
		<div
			id='page-wrapper'
			className='landing-page__background'
			style={{ height: "100vh" }}
		>
			<Container fluid className='h-100'>
				<Row className='h-100'>
					<Col className='d-flex flex-column'>
						<Navbar />
						<main className='h-100'></main>
						<Footer />
					</Col>
				</Row>
			</Container>
		</div>

		// {/* {alerts &&
		// 	alerts.map(user => (
		// 		<Alert
		// 			key={user.id}
		// 			variant='danger'
		// 			style={{ margin: "1rem auto", width: "50%" }}
		// 		>
		// 			{user.name}
		// 		</Alert>
		// 	))} */}
	);
};

export default Home;

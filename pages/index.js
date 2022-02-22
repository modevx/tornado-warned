import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import axios from "axios";

const Home = () => {
	const warnings = useQuery("warnings", () =>
		axios.get("https://api.weather.gov/alerts/active?event=Tornado Warning")
	);

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
						<Container className='h-100 d-flex align-items-center justify-content-evenly '>
							<Row className='w-100'>
								<Col className='d-flex justify-content-center'>
									<Card style={{ width: "18rem" }}>
										<Card.Img variant='top' src='holder.js/100px180' />
										<Card.Body className='bg-dark'>
											<Card.Title>Active Tornado Warnings</Card.Title>
											<Card.Text>
												Tornadoes verified by storm spotters or rotation
												indicated on radar.
											</Card.Text>
											<Button variant='danger'>GO TO WARNINGS</Button>
										</Card.Body>
									</Card>
								</Col>
								<Col className='d-flex justify-content-center'>
									<Card style={{ width: "18rem" }}>
										<Card.Img variant='top' src='holder.js/100px180' />
										<Card.Body className='bg-dark'>
											<Card.Title>Active Tornado Watches</Card.Title>
											<Card.Text>
												Conditions are right for producing destructive weather
												and tornadoes.
											</Card.Text>
											<Button variant='warning'>GO TO WATCHES</Button>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Container>
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

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PageWrapper from "../components/PageWrapper";

const LandingPage = () => {
	// const {
	// 	isLoading: warnLoading,
	// 	error: warnError,
	// 	data: warnData,
	// } = useQuery("warnings", () =>
	// 	axios.get("https://api.weather.gov/alerts/active?event=Tornado Warning")
	// );
	// const {
	// 	isLoading: watchLoading,
	// 	error: watchError,
	// 	data: watchData,
	// } = useQuery("watches", () =>
	// 	axios.get("https://api.weather.gov/alerts/active?event=Tornado Watch")
	// );

	// if (warnLoading) return <p>Loading...</p>;
	// if (warnError) return <p>ERROR: {warnError.message}</p>;

	// if (watchLoading) return <p>Loading...</p>;
	// if (watchError) return <p>ERROR: {watchError.message}</p>;

	// console.log(warnData.data.title);
	// console.log(warnData.data.features.length);

	// console.log(watchData.data.title);
	// console.log(watchData.data.features.length);

	return <PageWrapper></PageWrapper>;
	// <div
	// 	id='page-wrapper'
	// 	className='landing-page__background'
	// 	style={{ height: "100vh" }}
	// >
	// 	<Container fluid className='h-100'>
	// 		<Row className='h-100'>
	// 			<Col className='d-flex flex-column'>
	// 				<Navbar />
	// 				<Container className='h-100 d-flex align-items-center justify-content-evenly '>
	// 					<Row className='w-100'>
	// 						<Col className='d-flex justify-content-center'>
	// 							<Card bg='dark' style={{ width: "18rem" }}>
	// 								<Card.Img
	// 									variant='top'
	// 									src='bg-img-03.jpg'
	// 									height='180px'
	// 									width='286px'
	// 								/>
	// 								<div
	// 									style={{
	// 										height: "180px",
	// 										width: "286px",
	// 										display: "grid",
	// 										placeItems: "center",
	// 									}}
	// 								>
	// 									{warnData.data.features.length}
	// 								</div>

	// 								<Card.Body>
	// 									<Card.Title>Active Tornado Warnings</Card.Title>
	// 									<Card.Text>
	// 										Tornadoes verified by storm spotters or rotation
	// 										indicated on radar.
	// 									</Card.Text>
	// 									<Button variant='danger'>GO TO WARNINGS</Button>
	// 								</Card.Body>
	// 							</Card>
	// 						</Col>
	// 						<Col className='d-flex justify-content-center'>
	// 							<Card bg='dark' style={{ width: "18rem" }}>
	// 								{/* <Card.Img
	// 									variant='top'
	// 									src='bg-img-02.jpg'
	// 									height='180px'
	// 									width='286px'
	// 								/> */}
	// 								<div
	// 									style={{
	// 										height: "180px",
	// 										width: "286px",
	// 										display: "grid",
	// 										placeItems: "center",
	// 									}}
	// 								>
	// 									{watchData.data.features.length}
	// 								</div>
	// 								<Card.Body>
	// 									<Card.Title>Active Tornado Watches</Card.Title>
	// 									<Card.Text>
	// 										Conditions are right for producing destructive weather
	// 										and tornadoes.
	// 									</Card.Text>
	// 									<Button variant='warning'>GO TO WATCHES</Button>
	// 								</Card.Body>
	// 							</Card>
	// 						</Col>
	// 					</Row>
	// 				</Container>
	// 				<Footer />
	// 			</Col>
	// 		</Row>
	// 	</Container>
	// </div>

	//  {alerts &&
	// 			alerts.map(user => (
	// 				<Alert
	// 					key={user.id}
	// 					variant='danger'
	// 					style={{ margin: "1rem auto", width: "50%" }}
	// 				>
	// 					{user.name}
	// 				</Alert>

	// 	);
	// };
};

export default LandingPage;

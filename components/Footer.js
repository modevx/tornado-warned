import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<Container fluid>
			<Row>
				<Col className='d-flex justify-content-center'>
					&copy; {year} Ephraim Smith | Some Rights Reserved.
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;

import { Navbar, Page } from "components";
import { usePublicInformationStatements } from "hooks";

const AlertsPage = () => {
	const pns = usePublicInformationStatements();

	return (
		<Page>
			<Navbar />
			<h1>Local Storm Reports and Damage Assessments</h1>
		</Page>
	);
};

export default AlertsPage;

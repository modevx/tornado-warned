import { Navbar, Page } from "components";
import { usePublicInformationStatements } from "hooks";

const AlertsPage = () => {
	usePublicInformationStatements();
	// let display = "";

	// if (isLoading) return <p>Loading brah..</p>;

	// if (isError)
	// 	return (
	// 		<p>Error getting 2 weeks of tornado warnings >> `${error.message}`</p>
	// 	);

	// if (isSuccess) {
	// 	display = data.data.map((warning) => <p>{JSON.stringify(warning)}</p>);
	// }

	return (
		<Page>
			<Navbar />
			<h1>Local Storm Reports and Damage Assessments</h1>
		</Page>
	);
};

export default AlertsPage;

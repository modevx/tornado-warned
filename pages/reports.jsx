import { Navbar, Page } from "components";
import { usePublicInformationStatements } from "hooks";

const AlertsPage = () => {
	const { isLoading, isError, error, isSuccess, data } =
		usePublicInformationStatements();
	let display = "";

	if (isLoading) return <p>Loading brah..</p>;

	if (isError)
		return (
			<p>Error getting 2 weeks of tornado warnings >> `${error.message}`</p>
		);

	if (isSuccess) {
		display = data.map((warning) => (
			<p>{JSON.stringify(warning.productText)}</p>
		));
	}

	return (
		<Page>
			<Navbar />
			<h1>Local Storm Reports and Damage Assessments</h1>
			{data && display}
		</Page>
	);
};

export default AlertsPage;

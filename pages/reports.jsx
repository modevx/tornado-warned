import { Navbar, Page } from "components";
import { usePublicInformationStatements } from "hooks";

const ReportsPage = () => {
	const { isLoading, isError, error, isSuccess, data } =
		usePublicInformationStatements();
	let display = "";

	if (isLoading) return <p>Loading brah..</p>;

	if (isError)
		return (
			<p>Error getting 2 weeks of tornado warnings >> `${error.message}`</p>
		);

	if (isSuccess) {
		display = data.map((warning) =>
			warning.productText.split(/\n(?:\n)?/).map((text, index) => (
				<p className='text-xs mb-2' key={`${text.slice(0, 10)}-${index}`}>
					{text}
				</p>
			))
		);
	}

	return (
		<Page>
			<Navbar />
			<h1>Local Storm Reports and Damage Assessments</h1>
			{data && display}
		</Page>
	);
};

export default ReportsPage;

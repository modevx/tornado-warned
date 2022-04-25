import { AlertSection } from "../../components/Alerts";
import { PageWrapper } from "../../components/PageWrapper";
import { Navbar } from "../../components/Header/Navbar";

const AlertsPage = () => {
	return (
		<PageWrapper>
			<Navbar />
			<AlertSection />
		</PageWrapper>
	);
};

export default AlertsPage;

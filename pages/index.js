import { PageWrapper } from "components/common";
import { TornadoAlertSection } from "components/view";
import { Clock } from "components/common";

const HomeScreen = () => {
	return (
		<PageWrapper>
			<TornadoAlertSection alertType='Warning' />
			<TornadoAlertSection alertType='Watch' />
		</PageWrapper>
	);
};

export default HomeScreen;

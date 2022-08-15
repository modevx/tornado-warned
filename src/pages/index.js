import { Page } from "components";
import { TornadoAlert } from "components";

const HomeScreen = () => {
	return (
		<Page>
			<TornadoAlert alertType='Warning' />
			<TornadoAlert alertType='Watch' />
		</Page>
	);
};

export default HomeScreen;

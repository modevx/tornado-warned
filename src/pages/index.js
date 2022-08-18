import { Page } from "../layout";
import { TornadoAlert } from "../features";

const HomeScreen = () => {
	return (
		<Page>
			<TornadoAlert alertType='Warning' />
			<TornadoAlert alertType='Watch' />
		</Page>
	);
};

export default HomeScreen;

import { AlertList } from ".";
import { BsTornado } from "react-icons/bs";

export const AlertsSection = ({ alerts }) => {
	// console.log("AlertsSection >>\n", alerts[0]);

	return (
		<section>
			{alerts === null || alerts === undefined || alerts.length < 1 ? (
				<p className='mt-4 text-xl text-green-400'>All clear.</p>
			) : (
				<AlertList alertArray={alerts} />
			)}
		</section>
	);
};

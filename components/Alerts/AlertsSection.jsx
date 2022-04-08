import { AlertList } from ".";
import { BsTornado } from "react-icons/bs";

export const AlertsSection = ({ alerts, sectionHeading }) => {
	console.log("AlertsSection >>\n", alerts);

	return (
		<section className='p-4 bg-neutral-600 border-t-4 border-white'>
			<h2>
				{
					<div className='flex items-center justify-center'>
						<BsTornado className='mr-1' size={30} />
						<span className='font-bold inline-block  text-lg text-white uppercase ml-3'>
							{sectionHeading}
						</span>
					</div>
				}
			</h2>
			{alerts === null || alerts === undefined || alerts.length < 1 ? (
				<p className='mt-4 text-xl text-green-400'>All clear.</p>
			) : (
				<AlertList alertArray={alerts} />
			)}
		</section>
	);
};

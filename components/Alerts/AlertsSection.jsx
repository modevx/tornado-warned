import { AlertList } from ".";
import { BsTornado } from "react-icons/bs";

export const AlertsSection = ({ alerts, sectionHeading }) => {
	// console.log("AlertsSection >>\n", alerts);
	const colorMap = {
		tornado_warnings: "from-red-700",
		tornado_watches: "from-yellow-400",
	};

	return (
		<section
			className={`bg-gradient-to-r ${
				colorMap[sectionHeading.split(" ").join("_").toLowerCase()]
			} to-neutral-800 p-2 h-full`}
		>
			<h2>
				{
					<div className='flex items-center'>
						<BsTornado className='mr-1' size={30} />
						<span className='font-bold inline-block  text-lg text-white uppercase'>
							{sectionHeading}
						</span>
					</div>
				}
				<AlertList alertArray={alerts} />
			</h2>
		</section>
	);
};

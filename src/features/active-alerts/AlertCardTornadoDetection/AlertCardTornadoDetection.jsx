import { GiRadarSweep } from "react-icons/gi";
import { GiBinoculars } from "react-icons/gi";

export const AlertCardTornadoDetection = ({ tornadoDetection }) => {
	let DetectionIcon =
		tornadoDetection[0] === "OBSERVED" ? GiBinoculars : GiRadarSweep;

	return (
		<div className='bg-black rounded-md p-2'>
			<span className='text-sm '>DETECTION</span>
			<div className='flex justify-center mt-2'>
				<DetectionIcon size={40} />
			</div>
		</div>
	);
};

import { Basemap } from "components/maps";
import { OutlookSVGPathGroup } from "./outlook-svg-path-group";
import { Card } from "react-daisyui";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

export const OutlookPreviewCard = ({ day, featuresARR }) => {
	const {
		properties: { valid, expire },
	} = featuresARR[0];

	return (
		<Card className='rounded-md my-4 bg-stone-800 cursor-pointer md:mx-4 hover:scale-105'>
			<Basemap>
				<OutlookSVGPathGroup featuresARR={featuresARR} />
			</Basemap>
			<Card.Body>
				<Card.Title className='uppercase'>{`Day ${day} Outlook`}</Card.Title>
				<div className='flex justify-between'>
					<div className='flex flex-col'>
						<span>FROM:</span>
						<span>{dayjs(valid).format(`ddd MMM D, YYYY HHmm`)}</span>
					</div>
					<div className='flex flex-col'>
						<span>TO:</span>
						<span>{dayjs(expire).format(`ddd MMM D, YYYY HHmm`)}</span>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

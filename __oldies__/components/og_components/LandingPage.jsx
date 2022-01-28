import React from 'react';
// import { fetchTVSforYear } from '../services/severeWeatherDataInventory/fetchTVSforYear';
import { fetchTVSforMonth } from '../services/severeWeatherDataInventory/fetchTVSforMonth';
import { uniqueSignatures } from '../utils/uniqueSignatures';
import reverse from 'reverse-geocode';
import { sortArrByKey } from '../utils/sortArrByKey';

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tvsToRender: [],
		};
		this.handleFetchTVS = this.handleFetchTVS.bind(this);
	}

	componentDidMount() {
		// fetchTVSforYear();
		this.handleFetchTVS();
	}

	async handleFetchTVS() {
		const returnedTVS = await fetchTVSforMonth(new Date(Date.now()));
		// FIX: sorting by 'ZTIME' only returns 10 results
		// const sortedTVS = await sortArrByKey(returnedTVS, 'CELL_ID');
		const sortedTVS = await sortArrByKey(returnedTVS, 'ZTIME');
		const uniqueTVS = uniqueSignatures(sortedTVS);
		console.log(uniqueTVS);

		this.setState({
			tvsToRender: uniqueTVS,
		});

		// localStorage.setItem('TVSigs', JSON.stringify(tvsToRender));
	}

	render() {
		const uniqueTVStoRender = this.state.tvsToRender.map((tvs) => {
			let {
				properties: props,
				geometry: { coordinates: coords },
			} = tvs;

			// NOTE: \\\\\\\\\\\\\\
			// -- CARD DATA --
			// ////////////////////
			const { city, state_abbr } = reverse.lookup(coords[1], coords[0], 'us');
			const date = new Intl.DateTimeFormat('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric',
			}).format(new Date(props.ZTIME));
			const nexradId = props.WSR_ID;
			const stormCellId = props.CELL_ID;
			const liKey = `${nexradId}_${stormCellId}`;

			return (
				<li key={liKey} className='card'>
					<p>
						LOCATION: {city}, {state_abbr}
					</p>
					<p>DATE: {date}</p>
					<p>NEXRAD STATION: {nexradId}</p>
					<p>STORM CELL ID: {stormCellId}</p>
				</li>
			);
		});

		return (
			<div id='LandingPage' className='LandingPage'>
				{/* <ul>{this.state.renderedTVS}</ul> */}
				<ul>{uniqueTVStoRender}</ul>
			</div>
		);
	}
}

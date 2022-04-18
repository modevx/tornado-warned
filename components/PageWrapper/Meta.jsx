import Head from "next/head";

export const Meta = () => {
	return (
		<Head>
			<title>Tornado Action</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta
				name='keywords'
				content='severe weather, tornadoes, tornado, tornado alley, tornado warning, tornado watch, weather alerts, national weather service'
			/>
			<meta
				name='description'
				content='tornadoaction.com | real-time tornado alerts, news, safety info, stats, and data visualizations'
			/>

			{/* LinkedIn Meta */}
			<meta property='og:title' name='title' content='tornadoaction.com' />
			<meta property='og:type' content='website' />
			<meta
				property='og:image'
				name='image'
				content='https://repository-images.githubusercontent.com/450166464/cbf75522-24df-4440-a6dd-86f22ee693fb'
			/>
			<meta
				name='description'
				property='og:description'
				content='tornadoaction.com | real-time tornado alerts, news, safety info, stats, and data visualizations.'
			/>
			<meta name='author' content='Ephraim Smith' />

			{/* Twitter Meta */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:creator' content='@ephbuilding' />
			<meta name='twitter:site' content='@ephbuilding' />
			<meta
				name='twitter:image'
				content='https://repository-images.githubusercontent.com/450166464/cbf75522-24df-4440-a6dd-86f22ee693fb'
			/>
			<meta
				name='twitter:description'
				content='tornadoaction.com | real-time tornado alerts, news, safety info, stats, and data visualizations'
			/>
		</Head>
	);
};

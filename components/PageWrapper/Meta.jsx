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
				content='tornadoaction.com | real-time tornado alerts, news, safety info, stats, and graphics'
			/>

			{/* LinkedIn Meta */}
			<meta property='og:title' name='title' content='tornadoaction.com' />
			<meta property='og:type' content='website' />
			<meta
				property='og:image'
				name='image'
				content='https://repository-images.githubusercontent.com/450166464/63bf8d64-176c-4715-bcff-4f42664ac2dc'
			/>
			<meta
				name='description'
				property='og:description'
				content='tornadoaction.com | real-time tornado alerts, news, safety info, stats, and graphics.'
			/>
			<meta name='author' content='Ephraim Smith' />

			{/* Twitter Meta */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:creator' content='@tornado_action' />
			<meta name='twitter:site' content='@tornado_action' />
			<meta
				name='twitter:image'
				content='https://repository-images.githubusercontent.com/450166464/63bf8d64-176c-4715-bcff-4f42664ac2dc'
			/>
			<meta
				name='twitter:description'
				content='tornadoaction.com | real-time tornado alerts, news, safety info, stats, and graphics.'
			/>
		</Head>
	);
};

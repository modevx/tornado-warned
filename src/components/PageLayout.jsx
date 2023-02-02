import Head from "next/head";
import { Footer } from "./Footer";
import { MainNav } from "components/navigation";

export const PageLayout = ({ children }) => {
	return (
		<div className='bg-zinc-700 text-white'>
			<Meta />
			<div className='flex flex-col min-h-screen'>
				<MainNav />
				<main className='grow flex flex-col h-full'>{children}</main>
				<Footer />
			</div>
		</div>
	);
};

const Meta = () => {
	return (
		<Head>
			<title>Tornado Warned</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta
				name='keywords'
				content='severe weather, tornadoes, tornado, tornado alley, tornado warning, tornado watch, weather alerts, national weather service'
			/>
			<meta
				name='description'
				content='tornadowarned.com | real-time tornado alerts, news, safety info, stats, and graphics'
			/>

			{/* LinkedIn Meta */}
			<meta property='og:title' name='title' content='tornadowarned.com' />
			<meta property='og:type' content='website' />
			<meta
				property='og:image'
				name='image'
				content='https://repository-images.githubusercontent.com/450166464/d5820a8c-ce6a-438a-bca8-af79668f2e57'
			/>
			<meta
				name='description'
				property='og:description'
				content='tornadowarned.com | real-time tornado alerts, news, safety info, stats, and graphics.'
			/>
			<meta name='author' content='Ephraim Smith' />

			{/* Twitter Meta */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:creator' content='@_tornadowarned' />
			<meta
				name='twitter:image:src'
				content='https://www.tornadowarned.com/preview.png'
			/>
			<meta name='twitter:site' content='@_tornadowarned' />
			<meta name='twitter:title' content='tornadowarned.com' />
			<meta
				name='twitter:description'
				content='tornadowarned.com | real-time tornado alerts, news, safety info, stats, and graphics.'
			/>
		</Head>
	);
};

import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevTools } from "react-query/devtools";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
	const [queryClient] = React.useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			{/* <Hydrate state={pageProps.dehydrateState}> */}
			<Component {...pageProps} />
			{/* </Hydrate> */}
			{/* <ReactQueryDevTools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}

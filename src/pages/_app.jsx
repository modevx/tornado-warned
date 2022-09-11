import React from "react";
import { Theme, useTheme } from "react-daisyui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();
	const theme = useTheme();

	return (
		<QueryClientProvider client={queryClient}>
			<Theme dataTheme={theme}>
				<Component {...pageProps} />
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</Theme>
		</QueryClientProvider>
	);
}

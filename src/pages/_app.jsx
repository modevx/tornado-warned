import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "theme-ui";
import "styles/tailwind.css";
import { MODEVX_THEME } from "styles/theme";

export default function MyApp({ Component, pageProps }) {
	const [queryClient] = React.useState(() => new QueryClient());

	return (
		<ThemeProvider theme={MODEVX_THEME}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</QueryClientProvider>
			//{" "}
		</ThemeProvider>
	);
}

import { ReactQueryDevTools } from "react-query/devtools";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevTools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;

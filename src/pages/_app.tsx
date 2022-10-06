import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@lib/theme";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="641963392237-lp0j6msphamku5srl8kjdligdcd146d7.apps.googleusercontent.com">
      <SessionProvider session={pageProps?.session}>
        <SWRConfig
          value={{
            fallback: pageProps.fallback ?? {},
            revalidateOnMount: false,
            revalidateOnFocus: true,
          }}
        >
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </SWRConfig>
      </SessionProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;

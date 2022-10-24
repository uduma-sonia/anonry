import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import theme from "@lib/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const nextSession = pageProps.session;

  return (
    <GoogleOAuthProvider clientId="641963392237-lp0j6msphamku5srl8kjdligdcd146d7.apps.googleusercontent.com">
      <SessionProvider session={nextSession}>
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

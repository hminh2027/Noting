import { DefaultLayout } from "../src/components/layout";
import "../src/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import SessionLoader from "../src/api/SessionLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || DefaultLayout;
  return (
    <SessionProvider session={pageProps.session}>
      <SessionLoader>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </ChakraProvider>
      </SessionLoader>
    </SessionProvider>
  );
}

export default MyApp;

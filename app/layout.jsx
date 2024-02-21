import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/redux/provider";
import store from '../redux/store'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Creation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={metadata.description} />
          <title>{metadata.title}</title>
          <link rel="icon" href="/favicon.ico" sizes="50x50" />
          {/* Load Inter font */}
          <link rel="stylesheet" href={inter.cssText} />
        </Head>
        <body className={inter.className}>
          <ReduxProvider >
            {children}
            {/* Toast notifications container */}
            <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}

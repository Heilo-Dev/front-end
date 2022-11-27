import "../assets/css/globals.css";
import "../assets/css/scrollbar.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { userApi } from "../redux/slices/apiSlice";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ApiProvider api={userApi}>
          <Component {...pageProps} />
        </ApiProvider>
      </Provider>
    </SessionProvider>
  );
}

import * as React from "react";

import App from "next/app";

import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../styletron";

import AppHead from "../components/app/app-head.component";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <CssBaseline />
        <AppHead />
        <Component {...pageProps} />
      </StyletronProvider>
    );
  }
}

export default MyApp;

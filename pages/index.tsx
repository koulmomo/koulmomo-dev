import React from "react";

import Head from "next/head";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

export default function Index() {
  return (
    <>
      <Head>
        <title>{`koulmomo`}</title>
      </Head>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <main>
        <Typography variant="h1">{`Hello World!`}</Typography>
      </main>
    </>
  );
}

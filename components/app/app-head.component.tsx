import * as React from "react";

import Head from "next/head";

/**
 * @see: https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/
 * +
 * @see: https://css-tricks.com/favicon-quiz/
 */
export function Favicons() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/svg+xml"
        href="/favicons/koulmomo_favicon.svg"
      />
      <link rel="alternate icon" href="/favicons/koulmomo_favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#e91e63"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#e91e63" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ff0000" />
    </Head>
  );
}

export default function AppHead() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Favicons />
    </>
  );
}

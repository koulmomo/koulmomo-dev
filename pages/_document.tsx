import * as React from "react";
import Document, { Head, Main, NextScript, DocumentProps } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";

import { StyletronServer as styletron } from "../styletron";
import { Sheet } from "styletron-engine-atomic";

import { ServerStyleSheets } from "@material-ui/core/styles";

interface MyDocumentProps extends DocumentProps {
  styletronSheets: Array<Sheet>;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx) {
    // material-ui ssr
    // @see: https://github.com/mui-org/material-ui/blob/310f629eedd2db6318fe53534519d50cc54ca9e3/examples/nextjs/pages/_document.js
    const muiSheets = new ServerStyleSheets();

    const page = ctx.renderPage((App) => (props) =>
      muiSheets.collect(
        <StyletronProvider value={styletron}>
          <App {...props} />
        </StyletronProvider>
      )
    );

    const initialProps = await Document.getInitialProps(ctx);

    const styletronSheets = styletron.getStylesheets() || [];
    return {
      ...initialProps,
      ...page,
      styletronSheets,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        muiSheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styletronSheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;

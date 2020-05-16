import * as React from "react";
import Document, { Head, Main, NextScript, DocumentProps } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";

import { StyletronServer as styletron } from "../styletron";
import { Sheet } from "styletron-engine-atomic";

interface MyDocumentProps extends DocumentProps {
  stylesheets: Array<Sheet>;
}

class MyDocument extends Document<MyDocumentProps> {
  static getInitialProps(props) {
    const page = props.renderPage((App) => (props) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = styletron.getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
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

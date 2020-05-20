import * as React from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";

export interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function MaterialUITheme(props: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(() => {
    const palette = prefersDarkMode
      ? {
          primary: { main: "#b39ddb" },
          secondary: { main: "#ff4081" },
        }
      : {
          primary: { main: "#673AB7" },
          secondary: { main: "#F50057" },
        };

    return createMuiTheme({
      palette: {
        ...palette,
        type: prefersDarkMode ? "dark" : "light",
      },
    });
  }, [prefersDarkMode]);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

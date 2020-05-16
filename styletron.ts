import { Client, Server } from "styletron-engine-atomic";
import { DebugEngine } from "styletron-react";

const getHydrateClass = () =>
  (document.getElementsByClassName(
    "_styletron_hydrate_"
  ) as unknown) as HTMLCollectionOf<HTMLStyleElement>;

export const StyletronServer = new Server();

export const styletron =
  typeof window === "undefined"
    ? StyletronServer
    : new Client({
        hydrate: getHydrateClass(),
      });

export const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

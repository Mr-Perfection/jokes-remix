import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Outlet,
  isRouteErrorResponse,
  useRouteError,
  Meta,
  Scripts,
} from "@remix-run/react";

import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

function Document({
  children,
  title = `Remix: So great, it's funny!`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Very cool app | Remix" },
    {
      property: "twitter:image",
      content: "https://remix-jokes.lol/social.png",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:creator",
      content: "@remix_run",
    },
    {
      property: "twitter:site",
      content: "@remix_run",
    },
    {
      property: "twitter:title",
      content: "Remix Jokes",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "description",
      content: "Learn Remix and laugh at the same time!",
    },
    {
      name: "charset",
      content: "utf-8",
    },
  ];
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document
      title={`${error.status} ${error.statusText}`}
    >
      <div className="error-container">
        <h1>
          {error.status} {error.statusText}
        </h1>
      </div>
    </Document>
    );
  } else if (error instanceof Error) {
    return (
    <Document title="Uh-oh!">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    </Document>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

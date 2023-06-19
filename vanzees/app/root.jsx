import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import sharedStyles from './styles/sharedStyles.css';

export function links() {
  return [{rel: 'stylesheet', href: sharedStyles}]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Biryani:wght@400;600&family=Catamaran:wght@400;500;600&family=Hind+Vadodara:wght@300&display=swap" rel="stylesheet" />
        <Links />
      </head>
      <body className="app_container">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

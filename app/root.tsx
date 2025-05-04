import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import NotFoundScreen from "./screens/not_found_screen/not_found_screen";

const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "/assets/fonts/inter/inter.css",
  },
  {
    rel: "stylesheet",
    href: "/assets/styles/global_styles.css",
  },
  {
    rel: "stylesheet",
    href: "/assets/styles/pokemon_image_background_types_styles.css",
  },
  {
    rel: "stylesheet",
    href: "/assets/styles/pokemon_types_styles.css",
  },
];

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

function ErrorBoundary() {
  return <NotFoundScreen />;
}

export default App;
export { links, Layout, ErrorBoundary };

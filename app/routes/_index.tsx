import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const meta: V2_MetaFunction = () => [
  { title: "So great funny." },
  { description: "Remix jokes app. Learn Remix and laugh at the same time!" },
];

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              {/* https://remix.run/docs/en/1.15.0/tutorials/jokes#prefetching */}
              <Link prefetch="intent" to="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const express = require("express");
const next = require("next");
const sitemap = require("./sitemap");

const { parse } = require("url");

const dev = process.env.NODE_ENV !== "production";

const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : "https://hivib.es";

const app = next({ dev });
const handle = app.getRequestHandler();

// Nextjs's server prepared
app.prepare().then(async () => {
  const server = express();

  await sitemap({ server });

  server.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === "/robots.txt") {
      return res.status(200).sendFile("robots.txt", {
        root: __dirname,
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
      });
    }

    handle(req, res);
  });

  // starting express server
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`); // eslint-disable-line no-console
  });
});

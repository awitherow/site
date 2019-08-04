const sm = require("sitemap");
const sanity = require("./sanity");

const sitemap = sm.createSitemap({
  hostname: "https://hivib.es",
  cacheTime: 600000, // 600 sec - cache purge period
});

const setup = async ({ server }) => {
  const Items = await sanity.fetch(`
    *[_type == 'hobby']{
        name,
    }`);

  for (let i = 0; i < Items.length; i += 1) {
    const item = Items[i];
    sitemap.add({
      url: `/activity/${item.name.replace(/\s+/g, "-").toLowerCase()}`,
      changefreq: "daily",
      priority: 0.9,
    });
  }

  sitemap.add({
    url: "/",
    changefreq: "daily",
    priority: 1,
  });

  server.get("/sitemap.xml", (req, res) => {
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end();
        return;
      }

      res.header("Content-Type", "application/xml");
      res.send(xml);
    });
  });
};

module.exports = setup;

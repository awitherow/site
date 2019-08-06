const fs = require("fs-extra");
const sm = require("sitemap");
const sanity = require("./sanity");
const File = require("phylo");

function getDirectory() {
  console.log("HELLO! ---- ", File.cwd());
  console.log("LIST OF ALL FILES HERE... ---- ", File.list());
  return process.cwd() + "/public";
}

function buildRobotsTxt() {
  const robotsTxt = `User-agent: *
Disallow:
Sitemap: https://hivib.es/sitemap.xml`;

  fs.writeFileSync(`${getDirectory()}/robots.txt`, robotsTxt);
  console.log("- Robots.txt saved!");
}

// Sitemap
async function buildSitemap() {
  const sitemap = sm.createSitemap({
    hostname: "https://hivib.es",
    cacheTime: 600000, // 600 sec - cache purge period
  });

  sitemap.add({
    url: "/",
    changefreq: "daily",
    priority: 1,
  });

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

  const Posts = await sanity.fetch(`
    *[_type == 'post']{
      slug,
    }`);

  for (let i = 0; i < Posts.length; i += 1) {
    const item = Posts[i];
    sitemap.add({
      url: `/blog-post/${item.slug}`,
      changefreq: "daily",
      priority: 0.9,
    });
  }

  sitemap.toXML((err, xml) => {
    if (err) {
      console.log("error writing sitemap");
      return;
    }
    fs.writeFileSync(`${getDirectory()}/sitemap.xml`, xml);
    console.log("- Sitemap.xml saved!\n");
  });
}

buildRobotsTxt();
buildSitemap();

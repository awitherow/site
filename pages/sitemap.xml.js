import React, { Component } from "react";
import sm from "sitemap";
import sanity from "../lib/sanity";

export default class Sitemap extends Component {
  static async getInitialProps({ res }) {
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
      const activities = Items[i];
      sitemap.add({
        url: `/activity/${activities.name.replace(/\s+/g, "-").toLowerCase()}`,
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
      res.setHeader("Content-Type", "text/xml");
      res.write(xml);
      res.end();
    });
  }
}

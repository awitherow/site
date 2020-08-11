import React, { Component } from "react";
import sanity from "../lib/sanity";

import { links } from "../components/Navigation";

export default class Sitemap extends Component {
  static async getInitialProps({ res }) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    const SITE_ROOT = "https://highvib.es";

    const routes = [];

    links.map(({ id }) =>
      routes.push({
        url: `${id}`,
        changefreq: "daily",
        priority: 1,
      })
    );

    const activities = await sanity.fetch(`
        *[_type == 'hobby']{
            slug,
        }`);

    for (let i = 0; i < activities.length; i += 1) {
      const activity = activities[i];
      routes.push({
        url: `activity/${activity.slug}`,
        changefreq: "daily",
        priority: 1,
      });
    }

    const Posts = await sanity.fetch(`
        *[_type == 'post']{
          slug,
        }`);

    for (let i = 0; i < Posts.length; i += 1) {
      const item = Posts[i];
      routes.push({
        url: `blog-post/${item.slug.current}`,
        changefreq: "daily",
        priority: 1,
      });
    }

    routes.map(({ url, changefreq, priority }) => {
      xml += "<url>";
      xml += `<loc>${SITE_ROOT}/${url}</loc>`;
      xml += `<changefreq>${changefreq}</changefreq>`;
      xml += `<priority>${priority}</priority>`;
      xml += "</url>";
    });

    xml += "</urlset>";

    res.setHeader("Content-Type", "text/xml");
    res.write(xml);
    res.end();
  }
}

const axios = require("axios");

const SLUG_QUERY = `query {
  allProjects {
      slug
    }
}`;

const fs = require("fs");
const globby = require("globby");

async function getSlugs(page, pathName) {
  const path = page.replace("pages", "").replace(".js", "").replace(".mdx", "");
  let slugPages = "";
  if (path.indexOf("slug") > -1) {
    const request = await axios({
      url: "https://graphql.datocms.com/",
      method: "post",
      data: { query: SLUG_QUERY, variables: {} },
      headers: {
        authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      },
    });

    const slugs = request.data.data.allProjects.map((e) => {
      return e.slug;
    });

    slugPages = slugs
      .map((e) => {
        return `  <url>
      <loc>${`${process.env.WEBSITE_URL}/${pathName}/${e}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>`;
      })
      .join(",");
  }
  return slugPages;
}

function addPage(page) {
  const path = page.replace("pages", "").replace(".js", "").replace(".mdx", "");

  if (path.indexOf("slug") > -1) return;

  const route = path === "/index" ? "" : path;
  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
  ]);

  const content = pages
    .map((p) => {
      const page = addPage(p);

      return page;
    })
    .join("\n");

  const slugs = await getSlugs("slug", "projects");

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${content + slugs}
</urlset>`;
  sitemap = sitemap.replaceAll("/index", "");

  await fs.writeFileSync("public/sitemap.xml", sitemap);
}
console.log("generating sitemap...");
generateSitemap();

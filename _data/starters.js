const puppeteer = require('puppeteer');
const fs = require('fs');

module.exports = async () => {
  const screenshotsDir = 'img/screenshots';
  try {
    fs.mkdirSync(screenshotsDir);
  } catch (e) { }

  const browser = await puppeteer.launch();

  const data = [
    {
      "url": "https://github.com/11ty/eleventy-base-blog",
      "demo": "https://eleventy-base-blog.netlify.com",
      "name": "eleventy-base-blog",
      "description": "How to build a blog web site with Eleventy.",
      "author": "eleven_ty"
    },
    {
      "url": "https://glitch.com/~11ty",
      "demo": "https://11ty.glitch.me",
      "name": "eleventy-on-glitch",
      "description": "A playground site for Eleventy on Glitch with live rendered views right on the web!",
      "author": "eleven_ty"
    },
    {
      "url": "https://github.com/philhawksworth/eleventyone",
      "demo": "https://eleventyone.netlify.com",
      "name": "eleventyone",
      "description": "is an Eleventy scaffold project created by the legendary Phil Hawksworth. Makes use of Eleventy and PostCSS.",
      "author": "philhawksworth"
    },
    {
      "url": "https://hylia.website/",
      "demo": "https://hylia.website",
      "name": "Hylia",
      "description": "is a lightweight Eleventy starter kit with Netlify CMS pre-configured, so that you can one-click install a progressive, accessible blog in minutes. ",
      "author": "andybelldesign"
    },
    {
      "url": "https://github.com/ianrose/deventy",
      "demo": "https://deventy.netlify.com",
      "name": "deventy",
      "description": "A minimal 11ty starting point for building static websites with modern tools.",
      "author": "thatianrose"
    },
    {
      "url": "https://github.com/danurbanowicz/eleventy-netlify-boilerplate",
      "demo": "https://eleventy-netlify-boilerplate.netlify.com",
      "name": "eleventy-netlify-boilerplate",
      "description": "A template for building a simple blog web site with Eleventy and deploying it to Netlify. Includes Netlify CMS and Netlify Forms.",
      "author": "DanUrbanowicz"
    },
    {
      "url": "https://github.com/adamduncan/eleventy-shortcomps",
      "demo": "https://eleventy-shortcomps.netlify.com",
      "name": "eleventy-shortcomps",
      "description": "Starter project for static site by Adam Duncan, using Eleventy and shortcode components pattern.",
      "author": "duncanadam"
    },
    {
      "url": "https://skeleventy.netlify.com/",
      "demo": "https://skeleventy.netlify.com",
      "name": "Skeleventy",
      "description": "A skeleton boilerplate built with Eleventy and Tailwind CSS.",
      "author": "joe_dyer1"
    },
    {
      "url": "https://github.com/chrisssycollins/simple-journal",
      "demo": "https://simplejournal.chriscollins.me",
      "name": "Simple Journal",
      "description": "A simple journal/photo log website built on top of 11ty.",
      "author": "scottishstoater"
    },
    {
      "url": "https://7ty.tech/",
      "demo": "https://7ty.tech",
      "name": "Seven",
      "description": "An eleventy template based on bootstrap4layouts. Includes webpack, sass version of bootstrap, vue.js powered search and a whole lot more.",
      "author": "planetoftheweb"
    },
    {
      "url": "https://github.com/kmelve/eleventy-sanity-blog-boilerplate",
      "demo": "https://www.sanity.io",
      "name": "eleventy-sanity-blog-boilerplate",
      "description": "An eleventy + headless CMS blog boilerplate. Includes Sanity Studio, quick start, config and intstructions for deploying on Netlify and `now`.",
      "author": "kmelve"
    },
    {
      "url": "https://github.com/TryGhost/eleventy-starter-ghost",
      "demo": "https://eleventy.ghost.org",
      "name": "Eleventy Starter Ghost",
      "description": "A starter template to build websites with Ghost & Eleventy.",
      "author": "DavidDarnes"
    },
    {
      "url": "https://jamstackthemes.dev/ssg/eleventy/",
      "demo": "https://jamstackthemes.dev/ssg/eleventy/",
      "name": "JAMStack Themes",
      "description": "A list of starter themes filterable by supported static site generator and CMS. Link is directly to 11ty category.",
      "author": "stackbithq"
    }
  ];

  const promises = [];
  for (let i = 0; i < data.length; ++i) {
    const e = data[i];
    promises.push(new Promise(async (res, rej) => {
      try {
        const filename = `${screenshotsDir}/${e.name}.png`;
        console.log(`Taking screenshot of URL [${e.demo}] and saving to file [${filename}]`);
        const page = await browser.newPage();
        await page.goto(e.demo);
        await page.screenshot({ path: filename });
        res();
      } catch (e) {
        rej(e);
      }
    }));
  }
  await Promise.all(promises);
  await browser.close();
  return data;

}


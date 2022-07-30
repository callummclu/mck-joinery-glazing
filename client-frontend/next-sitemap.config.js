/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || "https://mckjoineryglazing.co.uk",
    generateRobotsTxt: true
}

module.exports = config
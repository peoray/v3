const config = {
  siteTitle: "Emmanuel Raymond",
  siteTitleShort: "Emmanuel Raymond",
  siteTitleAlt: "Emmanuel Raymond",
  siteLogo: '/static/logos/avatar.jpeg',
  siteUrl: "https://www.peoray.dev",
  siteDescription:
    "Personal website for Emmanuel Raymond, a software engineer, writer and hobbyist guitarist.",
  userTwitter: "@peoray_",
  repo: "https://github.com/peoray/peoray.dev",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  newsletter: "https://tinyletter.com/peoray/",
  userEmail: "emmanuelrayymond@gmail.com",
  userName: "peoray",
  pathPrefix: "/",
  googleAnalyticsID: 'UA-131778153-1',
  siteRss: "/rss.xml",
  siteRssTitle: "Emmanuel Raymond - RSS feed",
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights

  // postsPerPage: 4, // Amount of posts displayed per listing page.
  userLocation: "Nigeria", // User location to display in the author segment.
  userAvatar: "/static/author.jpg", // User avatar to display in the author segment.
  userDescription:
    "Personal website for Emmanuel Raymond, a software engineer, writer and hobbyist guitarist.", // User description to display in the author segment.

  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/peoray/peoray.dev",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/peoray_",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:emmanuelrayymond@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © Emmanuel Raymond 2017 - 2020. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

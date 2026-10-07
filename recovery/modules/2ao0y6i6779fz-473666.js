// Recovered from 2ao0y6i6779fz.js. Runtime module IDs: 473666.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  t.exports = {
    id: "google-analytics",
    description: "Install a Google Analytics tag on your website",
    website: "https://analytics.google.com/analytics/web/",
    scripts: [{
      url: "https://www.googletagmanager.com/gtag/js",
      params: ["id"],
      strategy: "worker",
      location: "head",
      action: "append"
    }, {
      code: "window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${args.id}')",
      strategy: "worker",
      location: "head",
      action: "append"
    }]
  };
};

module.exports = {
  title: "timecop-status",
  name: "timecop_status",
  description: "The status page for Timecop",
  serviceWorker: false,
  manifest: false,
  analytics: {
    ga: 'UA-54003772-13',
  },
  defaultLocale: "en",
  locales: [
    {
      code: "en",
      iso: "en-US",
      name: "English",
      file: "en.json"
    }
  ],
  content: {
    frontMatterFormat: "yaml",
    systems: [
      'api',
      'site-delivery'
    ]
  },
  theme: {
    links: {
      en: {
        home: "https://timecop-app.com/"
      }
    }
  }
}

module.exports = {
    title: "textlint",
    tagline: "The pluggable linting tool for text and markdown",
    url: "https://textlint.github.io",
    baseUrl: "/",
    organizationName: "textlint",
    projectName: "textlint",
    scripts: ["https://buttons.github.io/buttons.js"],
    favicon: "img/textlint-icon_256x256.png",
    customFields: {
        users: [
            {
                caption: "JavaScript Primer",
                image: "https://78.media.tumblr.com/avatar_c63524fcb991_128.png",
                infoLink: "https://jsprimer.net",
                pinned: true
            },
            {
                caption: "jp.vuejs.org",
                image: "https://avatars3.githubusercontent.com/u/6128107?s=200&v=4",
                infoLink: "https://github.com/vuejs/jp.vuejs.org",
                pinned: true
            },
            {
                caption: "SURVIVEJS - WEBPACK",
                image: "https://www.gravatar.com/avatar/b26ec3c2769168c2cbc64cc3df9cdd9c?s=200",
                infoLink: "https://survivejs.com/webpack/",
                pinned: true
            },
            {
                caption: "Hoodie",
                image: "https://hoodiehq.github.io/hoodie-css/src/content_img/animals/low-profile-dog-3.png",
                infoLink: "http://hood.ie/",
                pinned: true
            },
            {
                caption: "GIS実習オープン教材",
                image: "https://raw.githubusercontent.com/gis-oer/gis-oer/master/img/logo/logo_gis-oer_01_256px.png",
                infoLink: "https://github.com/gis-oer/gis-oer",
                pinned: true
            },
            {
                caption: "株式会社ソラコム",
                image: "/img/soracom.png",
                infoLink: "https://soracom.jp",
                pinned: true
            },
            {
                caption: "校正さん",
                image: "https://kohsei-san.hata6502.com/favicon.png",
                infoLink: "https://kohsei-san.hata6502.com/lp/",
                pinned: true
            }
        ],
        repoUrl: "https://github.com/textlint/textlint"
    },
    onBrokenLinks: "log",
    onBrokenMarkdownLinks: "log",
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editUrl: "https://github.com/textlint/textlint/edit/master/docs/",
                    path: "../docs",
                    sidebarPath: "../website/sidebars.json"
                },
                blog: {
                    path: "blog"
                },
                theme: {
                    customCss: ["/src/css/customTheme.css", "/src/css/custom.css"]
                }
            }
        ]
    ],
    plugins: [
        [
            "@docusaurus/plugin-client-redirects",
            {
                fromExtensions: ["html"]
            }
        ]
    ],
    themeConfig: {
        navbar: {
            title: "textlint",
            logo: {
                src: "img/textlint-icon_256x256.png"
            },
            items: [
                {
                    to: "docs/getting-started",
                    label: "Docs",
                    position: "left"
                },
                {
                    href: "https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule",
                    label: "Rules",
                    position: "left"
                },
                {
                    to: "blog",
                    label: "Blog",
                    position: "left"
                },
                {
                    to: "/help",
                    label: "Help",
                    position: "left"
                },
                {
                    href: "https://github.com/textlint/textlint",
                    label: "GitHub",
                    position: "left"
                }
            ]
        },
        image: "img/textlint-icon_256x256.png",
        footer: {
            links: [],
            copyright: "Copyright © 2024textlint organization",
            logo: {
                src: "img/textlint-icon_256x256.png"
            }
        },
        algolia: {
            appId: "BH4D9OD16A",
            apiKey: "27ef1d5fc0d12142485f3784f7d3cb46",
            indexName: "textlint",
            algoliaOptions: {}
        }
    }
};
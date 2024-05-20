import React from "react";
import ComponentCreator from "@docusaurus/ComponentCreator";

export default [
    {
        path: "/__docusaurus/debug",
        component: ComponentCreator("/__docusaurus/debug", "f9c"),
        exact: true
    },
    {
        path: "/__docusaurus/debug/config",
        component: ComponentCreator("/__docusaurus/debug/config", "fed"),
        exact: true
    },
    {
        path: "/__docusaurus/debug/content",
        component: ComponentCreator("/__docusaurus/debug/content", "abc"),
        exact: true
    },
    {
        path: "/__docusaurus/debug/globalData",
        component: ComponentCreator("/__docusaurus/debug/globalData", "cb0"),
        exact: true
    },
    {
        path: "/__docusaurus/debug/metadata",
        component: ComponentCreator("/__docusaurus/debug/metadata", "42a"),
        exact: true
    },
    {
        path: "/__docusaurus/debug/registry",
        component: ComponentCreator("/__docusaurus/debug/registry", "7a6"),
        exact: true
    },
    {
        path: "/__docusaurus/debug/routes",
        component: ComponentCreator("/__docusaurus/debug/routes", "4be"),
        exact: true
    },
    {
        path: "/blog",
        component: ComponentCreator("/blog", "e51"),
        exact: true
    },
    {
        path: "/blog/2018/01/13/renewing-1.0.0",
        component: ComponentCreator("/blog/2018/01/13/renewing-1.0.0", "dfb"),
        exact: true
    },
    {
        path: "/blog/2018/05/22/new-website",
        component: ComponentCreator("/blog/2018/05/22/new-website", "d79"),
        exact: true
    },
    {
        path: "/blog/2018/07/22/textlint-11",
        component: ComponentCreator("/blog/2018/07/22/textlint-11", "6ed"),
        exact: true
    },
    {
        path: "/blog/2021/05/24/textlint-12",
        component: ComponentCreator("/blog/2021/05/24/textlint-12", "df9"),
        exact: true
    },
    {
        path: "/blog/2023/01/27/textlint-13",
        component: ComponentCreator("/blog/2023/01/27/textlint-13", "06b"),
        exact: true
    },
    {
        path: "/blog/2024/02/03/textlint-14",
        component: ComponentCreator("/blog/2024/02/03/textlint-14", "65d"),
        exact: true
    },
    {
        path: "/blog/archive",
        component: ComponentCreator("/blog/archive", "d4e"),
        exact: true
    },
    {
        path: "/help",
        component: ComponentCreator("/help", "650"),
        exact: true
    },
    {
        path: "/search",
        component: ComponentCreator("/search", "448"),
        exact: true
    },
    {
        path: "/docs",
        component: ComponentCreator("/docs", "547"),
        routes: [
            {
                path: "/docs/",
                component: ComponentCreator("/docs/", "1f3"),
                exact: true
            },
            {
                path: "/docs/cli",
                component: ComponentCreator("/docs/cli", "40b"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/configuring",
                component: ComponentCreator("/docs/configuring", "e13"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/contributing",
                component: ComponentCreator("/docs/contributing", "33f"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/faq/failed-to-load-textlints-module",
                component: ComponentCreator("/docs/faq/failed-to-load-textlints-module", "eb6"),
                exact: true
            },
            {
                path: "/docs/faq/line-column-or-index",
                component: ComponentCreator("/docs/faq/line-column-or-index", "049"),
                exact: true
            },
            {
                path: "/docs/filter-rule",
                component: ComponentCreator("/docs/filter-rule", "07d"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/formatter",
                component: ComponentCreator("/docs/formatter", "edc"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/getting-started",
                component: ComponentCreator("/docs/getting-started", "0ee"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/ignore",
                component: ComponentCreator("/docs/ignore", "dfd"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/integrations",
                component: ComponentCreator("/docs/integrations", "427"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/plugin",
                component: ComponentCreator("/docs/plugin", "17e"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/rule",
                component: ComponentCreator("/docs/rule", "13e"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/rule-advanced",
                component: ComponentCreator("/docs/rule-advanced", "6b9"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/rule-fixable",
                component: ComponentCreator("/docs/rule-fixable", "138"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/rule-preset",
                component: ComponentCreator("/docs/rule-preset", "4ac"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/rule-tips-after-all",
                component: ComponentCreator("/docs/rule-tips-after-all", "68b"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/txtnode",
                component: ComponentCreator("/docs/txtnode", "109"),
                exact: true,
                sidebar: "docs"
            },
            {
                path: "/docs/use-as-modules",
                component: ComponentCreator("/docs/use-as-modules", "695"),
                exact: true,
                sidebar: "docs"
            }
        ]
    },
    {
        path: "/",
        component: ComponentCreator("/", "0d8"),
        exact: true
    },
    {
        path: "*",
        component: ComponentCreator("*")
    }
];

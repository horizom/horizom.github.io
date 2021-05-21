export default {
  "title": "Horizom",
  "tagline": "A PHP lightness framework & CMS",
  "url": "https://horizom.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.png",
  "organizationName": "horizom",
  "projectName": "horizom",
  "themeConfig": {
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    },
    "hideableSidebar": true,
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "Horizom",
      "logo": {
        "alt": "Horizom Logo",
        "src": "img/logo.svg",
        "srcDark": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "framework/index",
          "position": "right",
          "label": "Framework",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "type": "doc",
          "docId": "cms/index",
          "position": "right",
          "label": "CMS",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "type": "search",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/horizom"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/horizom"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/horizom"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/horizom"
            }
          ]
        },
        {
          "title": "Legal",
          "items": [
            {
              "label": "Privacy",
              "href": "/legal/privacy/"
            },
            {
              "label": "Terms",
              "href": "/legal/terms/"
            },
            {
              "label": "Cookie Policy",
              "href": "/legal/cookie-policy/"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Codivoire Logo",
        "src": "img/cdi-logo-white.png",
        "href": "https://www.codivoire.com"
      },
      "copyright": "Copyright © 2021 Horizom, Inc. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#9EFEFF",
          "backgroundColor": "#2D2A55"
        },
        "styles": [
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 238, 128)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgba(239, 83, 80, 0.56)"
            }
          },
          {
            "types": [
              "inserted"
            ],
            "style": {
              "color": "rgb(173, 219, 103)"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(179, 98, 255)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "style": {
              "color": "rgb(255, 255, 255)"
            }
          },
          {
            "types": [
              "constant"
            ],
            "style": {
              "color": "rgb(255, 98, 140)"
            }
          },
          {
            "types": [
              "string",
              "url"
            ],
            "style": {
              "color": "rgb(165, 255, 144)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(255, 238, 128)"
            }
          },
          {
            "types": [
              "number",
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 98, 140)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 180, 84)"
            }
          },
          {
            "types": [
              "keyword",
              "operator",
              "property",
              "namespace",
              "tag",
              "selector",
              "doctype"
            ],
            "style": {
              "color": "rgb(255, 157, 0)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function",
              "class-name"
            ],
            "style": {
              "color": "rgb(250, 208, 0)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "googleAnalytics": {
      "trackingID": "UA-141789564-1",
      "anonymizeIP": true
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/edy/www/repo/horizom/docs/sidebars.js",
          "editUrl": "https://github.com/horizom/docs/edit/master/"
        },
        "blog": {
          "showReadingTime": true,
          "postsPerPage": 3,
          "blogTitle": "Clutch Open-source Developer Blog",
          "blogDescription": "Where Clutch open-source maintainers and contributors share their work and thoughts on development.",
          "editUrl": "https://github.com/horizom/docs/edit/master/blog/"
        },
        "theme": {
          "customCss": "/Users/edy/www/repo/horizom/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "/Users/edy/www/repo/horizom/docs/node_modules/@easyops-cn/docusaurus-search-local/dist/server/server/index.js",
      {
        "hashed": true
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};
export default {
  "title": "Horizom",
  "tagline": "A lightness PHP framework & CMS",
  "url": "https://horizom.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "ignore",
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
          "label": "Introduction",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "label": "Bases",
          "position": "right",
          "items": [
            {
              "label": "Controller",
              "to": "docs/framework/Bases/controller"
            },
            {
              "label": "Request",
              "to": "docs/framework/Bases/request"
            },
            {
              "label": "Response",
              "to": "docs/framework/Bases/response"
            }
          ]
        },
        {
          "label": "Routes",
          "position": "right",
          "items": [
            {
              "label": "Routes simple",
              "to": "docs/framework/Routes/defining-routes"
            },
            {
              "label": "Routes groupées",
              "to": "docs/framework/Routes/attaching-route-groups"
            }
          ]
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
          "title": "Communauté",
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
              "label": "WhatsApp (Tchat)",
              "href": "https://chat.whatsapp.com/K3PR6I5QNhr1eW9gyMIn0M"
            }
          ]
        },
        {
          "title": "Extras",
          "items": [
            {
              "label": "Codec Solutions",
              "href": "https://www.codecci.com/"
            },
            {
              "label": "CodIvoire News",
              "href": "https://www.codivoire.com/"
            }
          ]
        },
        {
          "title": "Sources",
          "items": [
            {
              "label": "Framework",
              "href": "https://github.com/horizom/framework"
            },
            {
              "label": "Core",
              "href": "https://github.com/horizom/core"
            },
            {
              "label": "Documentation",
              "href": "https://github.com/horizom/horizom.github.io"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Codivoire Logo",
        "src": "img/cdi-logo-white.png",
        "href": "https://www.codivoire.com"
      },
      "copyright": "Copyright © 2021 Horizom, Inc."
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
          "sidebarPath": "/Volumes/Save/www/horizom.github.io/sidebars.js",
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
          "customCss": "/Volumes/Save/www/horizom.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "/Volumes/Save/www/horizom.github.io/node_modules/@easyops-cn/docusaurus-search-local/dist/server/server/index.js",
      {
        "hashed": true,
        "translations": {
          "search_placeholder": "Rechercher",
          "see_all_results": "Voir tous les résultats",
          "no_results": "Aucun résultat.",
          "search_results_for": "Résultats de recherche pour \"{{ keyword }}\"",
          "search_the_documentation": "Rechercher la documentation",
          "count_documents_found": "{{ count }} document trouvé",
          "count_documents_found_plural": "{{ count }} documents trouvés",
          "no_documents_were_found": "Aucun document n'a été trouvé"
        }
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
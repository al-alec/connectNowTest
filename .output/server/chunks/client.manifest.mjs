const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-2d6bb7c5.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "pages/contact.vue",
      "pages/index.vue"
    ],
    "css": [
      "entry.3ce85cec.css"
    ]
  },
  "pages/contact.vue": {
    "file": "contact-4d692675.mjs",
    "src": "pages/contact.vue",
    "isDynamicEntry": true,
    "imports": [
      "_navbar-23b4147d.mjs",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "_navbar-23b4147d.mjs": {
    "file": "navbar-23b4147d.mjs",
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-ec59c429.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs",
      "_navbar-23b4147d.mjs"
    ]
  }
};

export { client_manifest as default };

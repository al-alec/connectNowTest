import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/contact-4d692675.mjs": {
    "type": "application/javascript",
    "etag": "\"58f-tqjsmkDhXo0B7/B7WzRy3x/qHqk\"",
    "mtime": "2022-04-16T16:58:13.620Z",
    "path": "../public/_nuxt/contact-4d692675.mjs"
  },
  "/_nuxt/entry-2d6bb7c5.mjs": {
    "type": "application/javascript",
    "etag": "\"22f9e-83YFefeSZMocDUWWjebFt/8I/0o\"",
    "mtime": "2022-04-16T16:58:13.611Z",
    "path": "../public/_nuxt/entry-2d6bb7c5.mjs"
  },
  "/_nuxt/entry.3ce85cec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36b8-XWu0kBnJYRS2Tg8n898q975mPgQ\"",
    "mtime": "2022-04-16T16:58:13.621Z",
    "path": "../public/_nuxt/entry.3ce85cec.css"
  },
  "/_nuxt/index-ec59c429.mjs": {
    "type": "application/javascript",
    "etag": "\"c70-L6kZZhprKG2dy9RjLg4LVOnJZjk\"",
    "mtime": "2022-04-16T16:58:13.621Z",
    "path": "../public/_nuxt/index-ec59c429.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"364-kOczdh1I8nLogX4SuycDGOupz1U\"",
    "mtime": "2022-04-16T16:58:13.621Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/navbar-23b4147d.mjs": {
    "type": "application/javascript",
    "etag": "\"27d-+aF/oMpF8lMkjIxUNFAoA2l+og8\"",
    "mtime": "2022-04-16T16:58:13.621Z",
    "path": "../public/_nuxt/navbar-23b4147d.mjs"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));
function readAsset (id) {
  return promises.readFile(resolve(mainDir, assets[id].path)).catch(() => {})
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _static = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

export { _static as default };

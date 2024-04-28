import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import './chunks/astro_C0lg389B.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"bookmarks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/bookmarks","isIndex":true,"type":"page","pattern":"^\\/bookmarks\\/?$","segments":[[{"content":"bookmarks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bookmarks/index.astro","pathname":"/bookmarks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"playlists/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/playlists","isIndex":true,"type":"page","pattern":"^\\/playlists\\/?$","segments":[[{"content":"playlists","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/playlists/index.astro","pathname":"/playlists","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CY1iZwUD.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BboQvL2T.js"},{"type":"external","value":"/_astro/page.CY1iZwUD.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.D-Nua4CU.css"},{"type":"external","src":"/_astro/_post_.CyfQd-72.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/projects/gol","isIndex":true,"type":"page","pattern":"^\\/projects\\/gol\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"gol","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/gol/index.astro","pathname":"/projects/gol","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CY1iZwUD.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://deloughry.co.uk","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/matt/projects/deloughry-v2/src/pages/posts/[post].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/bookmarks/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/playlists/[playlist].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/playlists/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/posts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/projects/gol/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/matt/projects/deloughry-v2/src/layouts/Base.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/matt/projects/deloughry-v2/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[post]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/bookmarks/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/playlists/[playlist]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/playlists/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/gol/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/matt/projects/deloughry-v2/src/pages/og-image/[slug].svg.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/og-image/[slug].svg@_@ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/matt/projects/deloughry-v2/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["C:/Users/matt/projects/deloughry-v2/src/components/blog/Hero.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/matt/projects/deloughry-v2/src/components/blog/PostPreview.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_CNvS4CgE.mjs","C:/Users/matt/projects/deloughry-v2/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_Hb05nn4I.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_D7KoB3it.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_B35yeNUm.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_Dd9QjxbK.mjs","\u0000@astro-page:src/pages/bookmarks/index@_@astro":"chunks/index_CW31lxXK.mjs","\u0000@astro-page:src/pages/og-image/[slug].svg@_@ts":"chunks/_slug__Blmg4Dhm.mjs","\u0000@astro-page:src/pages/playlists/og-image/[slug].png@_@ts":"chunks/_slug__CNZECrKi.mjs","\u0000@astro-page:src/pages/playlists/[playlist]@_@astro":"chunks/_playlist__jM2-Q_l_.mjs","\u0000@astro-page:src/pages/playlists/index@_@astro":"chunks/index_CPD2xNxD.mjs","\u0000@astro-page:src/pages/posts/[post]@_@astro":"chunks/_post__DNMWk-Jq.mjs","\u0000@astro-page:src/pages/posts/[...page]@_@astro":"chunks/_.._wJFybTj8.mjs","\u0000@astro-page:src/pages/projects/gol/index@_@astro":"chunks/index_8W_cGhyS.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_SnxuQCXG.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_B5HbKWta.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"chunks/_.._Bx5SUL25.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_Sy2ZL0T0.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CEIyNPJw.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/integrating-webmentions-with-next-js.mdx?astroContentCollectionEntry=true":"chunks/integrating-webmentions-with-next-js_BsF5gXUA.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/it-has-to-change-shape-up-do-better.mdx?astroContentCollectionEntry=true":"chunks/it-has-to-change-shape-up-do-better_BqXyxFFp.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker.mdx?astroContentCollectionEntry=true":"chunks/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker_iutmx28z.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/work-in-progress.mdx?astroContentCollectionEntry=true":"chunks/work-in-progress_dk96HzbA.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/integrating-webmentions-with-next-js.mdx?astroPropagatedAssets":"chunks/integrating-webmentions-with-next-js_V4Npz5_p.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/it-has-to-change-shape-up-do-better.mdx?astroPropagatedAssets":"chunks/it-has-to-change-shape-up-do-better_DQkbcCck.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker.mdx?astroPropagatedAssets":"chunks/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker_BrNtA0y9.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/work-in-progress.mdx?astroPropagatedAssets":"chunks/work-in-progress_wo5-VtXY.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/integrating-webmentions-with-next-js.mdx":"chunks/integrating-webmentions-with-next-js_DUHxFLLF.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/it-has-to-change-shape-up-do-better.mdx":"chunks/it-has-to-change-shape-up-do-better_CCGIstgK.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker.mdx":"chunks/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker_DoFTuSFg.mjs","C:/Users/matt/projects/deloughry-v2/src/content/post/work-in-progress.mdx":"chunks/work-in-progress_BF1fGOfv.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.5teP8Vyf.js","src/components/ImageWithBadge":"_astro/ImageWithBadge.e_tCFpJV.js","src/components/Tracks":"_astro/Tracks.Bz6xRSLK.js","/astro/hoisted.js?q=1":"_astro/hoisted.EovF1rPx.js","src/components/GameOfLife/game":"_astro/game.Cs6eiZfn.js","astro:scripts/page.js":"_astro/page.CY1iZwUD.js","src/components/NowPlaying":"_astro/NowPlaying.PvKf4MFA.js","/astro/hoisted.js?q=2":"_astro/hoisted.BboQvL2T.js","@astrojs/react/client.js":"_astro/client.Cvlxmu5W.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/image.BxOnCIRk.webp","/_astro/Matt.DBmd2YCT.jpg","/_astro/logo-small.Nmiy0Dm2.png","/_astro/_post_.CyfQd-72.css","/_astro/about.D-Nua4CU.css","/192x192.png","/512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/manifest.webmanifest","/robots.txt","/social-card.png","/_astro/client.Cvlxmu5W.js","/_astro/game.Cs6eiZfn.js","/_astro/hoisted.5teP8Vyf.js","/_astro/hoisted.BboQvL2T.js","/_astro/hoisted.EovF1rPx.js","/_astro/ImageWithBadge.e_tCFpJV.js","/_astro/index.CfLG8xVc.js","/_astro/jsx-runtime.Dla7y0KP.js","/_astro/NowPlaying.PvKf4MFA.js","/_astro/page.CY1iZwUD.js","/_astro/play-icon.D_qdTj1N.js","/_astro/Tracks.Bz6xRSLK.js","/_astro/_playlist_.D5STJd-w.css","/_astro/_post_.DCB0w1EN.css","/_astro/page.CY1iZwUD.js","/404.html","/about/index.html","/bookmarks/index.html","/playlists/index.html","/projects/index.html","/tags/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };

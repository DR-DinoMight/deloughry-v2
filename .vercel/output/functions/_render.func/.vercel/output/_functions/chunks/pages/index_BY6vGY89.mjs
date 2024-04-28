/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderComponent, j as Fragment, m as maybeRenderHead, k as renderSlot, l as renderTransition, n as renderHead, o as defineScriptVars } from '../astro_C0lg389B.mjs';
import 'kleur/colors';
/* empty css                           */
import { $ as $$Image } from './generic_DfbWuyTh.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect, useCallback } from 'react';
import useSWR from 'swr';
/* empty css                           */

const siteMeta = {
  author: "Matthew Peck-Deloughry",
  title: "Deloughry.co.uk",
  description: "A little hovel of Mine",
  lang: "en-GB",
  ogLocale: "en_GB",
  githubUrl: "https://github.com/DR-DinoMight/deloughry-v2",
  themeColorLight: "#DDDFDF",
  themeColorDark: "#191919"
};

const $$Astro$8 = createAstro("https://deloughry.co.uk");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, ogImage, articleDate } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteMeta.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/social-card.png", Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Icons / Favicon --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest"><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${siteTitle}</title><meta name="title"${addAttribute(siteTitle, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(siteMeta.author, "content")}><!-- Theme Colour --><meta name="theme-color"${addAttribute(siteMeta.themeColorLight, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(articleDate ? "article" : "website", "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:site_name"${addAttribute(siteMeta.title, "content")}><meta property="og:locale"${addAttribute(siteMeta.ogLocale, "content")}><meta property="og:image"${addAttribute(socialImageURL, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta property="article:author"${addAttribute(siteMeta.author, "content")}><meta property="article:published_time"${addAttribute(articleDate, "content")}>` })}`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(socialImageURL, "content")}><!-- RSS auto-discovery --><link rel="alternate" type="application/rss+xml"${addAttribute(siteMeta.title, "title")} href="/rss.xml">`;
}, "C:/Users/matt/projects/deloughry-v2/src/components/BaseHead.astro", void 0);

const $$Astro$7 = createAstro("https://deloughry.co.uk");
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate` ${renderComponent($$result, "theme-toggle", "theme-toggle", { "class": "ml-auto" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button type="button" id="toggle-theme" class="group relative h-9 w-9 rounded-md bg-zinc-200 p-2 ring-zinc-400 transition-all hover:ring-2 dark:bg-zinc-700" aria-label="Toggle Dark Mode"> <svg id="sun-svg" class="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-all group-aria-pressed:scale-100 group-aria-pressed:opacity-100" aria-hidden="true" focusable="false" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <svg id="moon-svg" class="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-all group-aria-[pressed=false]:scale-100 group-aria-[pressed=false]:opacity-100" aria-hidden="true" focusable="false" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle> <path d="M7.63262 3.06689C8.98567 3.35733 9.99999 4.56025 9.99999 6.00007C9.99999 7.65693 8.65685 9.00007 6.99999 9.00007C5.4512 9.00007 4.17653 7.82641 4.01685 6.31997" stroke="currentColor" stroke-width="1.5"></path> <path d="M22 13.0505C21.3647 12.4022 20.4793 12 19.5 12C17.567 12 16 13.567 16 15.5C16 17.2632 17.3039 18.7219 19 18.9646" stroke="currentColor" stroke-width="1.5"></path> <path d="M14.5 8.51L14.51 8.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 17C11.1046 17 12 16.1046 12 15C12 13.8954 11.1046 13 10 13C8.89543 13 8 13.8954 8 15C8 16.1046 8.89543 17 10 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </button> ` })}`;
}, "C:/Users/matt/projects/deloughry-v2/src/components/ThemeToggle.astro", void 0);

const logoImg = new Proxy({"src":"/_astro/logo-small.Nmiy0Dm2.png","width":130,"height":130,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/matt/projects/deloughry-v2/src/assets/logo-small.png";
							}
							
							return target[name];
						}
					});

const $$Astro$6 = createAstro("https://deloughry.co.uk");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const url = new URL(Astro2.request.url);
  const menuLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Blog",
      path: "/posts"
    },
    {
      title: "Playlists",
      path: "/playlists"
    },
    {
      title: "Projects",
      path: "/projects"
    },
    {
      title: "Bookmarks",
      path: "/bookmarks"
    }
  ];
  return renderTemplate` ${maybeRenderHead()}<header id="main-header" class="group relative mb-8 flex items-center sm:pl-[4.5rem]"> <div class="flex sm:flex-col"> <a href="https://deloughry.co.uk" rel="author" class="inline-flex items-center grayscale hover:filter-none sm:relative sm:inline-block font-oswald noj-underline"${addAttribute(url.pathname === "/" ? "page" : false, "aria-current")}> ${renderComponent($$result, "Image", $$Image, { "src": logoImg, "height": logoImg.height, "width": logoImg.width, "alt": "A dino skull", "loading": "eager", "class": "mr-3 w-8 sm:absolute sm:left-[-4.5rem] sm:mr-0 sm:w-16", "aria-hidden": "true" })} <span class="text-xl font-bold sm:text-2xl no-underline uppercase">Matthew Peck-Deloughry</span> </a> <nav id="navigation-menu" class="absolute -inset-x-4 top-14 hidden flex-col items-end gap-y-4 rounded-md bg-bgColor h-screen sm:h-auto py-4 text-accent shadow group-[.menu-open]:z-50 group-[.menu-open]:flex sm:static sm:z-auto sm:-ml-4 sm:mt-1 sm:flex sm:flex-row sm:items-center sm:divide-x sm:divide-dashed sm:divide-accent sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none" aria-label="Main menu"> ${menuLinks.flatMap((link) => renderTemplate`<a${addAttribute(link.path, "href")} class="px-4 py-4 hover:text-link sm:py-0 sm:hover:underline"${addAttribute(url.pathname === link.path ? "page" : false, "aria-current")} rel="prefetch"> ${link.title} </a>`)} </nav> </div> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} <button id="toggle-navigation-menu" class="group relative ml-8 h-7 w-7 sm:invisible sm:hidden" type="button" aria-label="Open main menu" aria-expanded="false" aria-haspopup="menu"> <svg id="line-svg" class="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-all group-aria-expanded:scale-0 group-aria-expanded:opacity-0" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path> </svg> <svg id="cross-svg" class="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 text-accent opacity-0 transition-all group-aria-expanded:scale-100 group-aria-expanded:opacity-100" class="text-accent" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </header>`;
}, "C:/Users/matt/projects/deloughry-v2/src/components/layout/Header.astro", void 0);

const $$Astro$5 = createAstro("https://deloughry.co.uk");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const url = new URL(Astro2.request.url);
  const menuLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Blog",
      path: "/posts"
    },
    {
      title: "Playlists",
      path: "/playlists"
    },
    {
      title: "Projects",
      path: "/projects"
    },
    {
      title: "Bookmarks",
      path: "/bookmarks"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center align-top  sm:flex-row sm:justify-between sm:text-xs"> <div class="mr-0 sm:mr-4">
Copyright &copy; ${year} <span aria-label="rocket emoji">🦖</span> </div> <nav aria-label="More on this site" class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-dashed sm:divide-accent"> ${menuLinks.flatMap((link) => renderTemplate`<a${addAttribute(link.path, "href")} class="cactus-link px-4 py-2 sm:px-2 sm:py-0 sm:hover:underline"${addAttribute(url.pathname === link.path ? "page" : false, "aria-current")} rel="prefetch"> ${link.title} </a>`)} </nav> </footer>`;
}, "C:/Users/matt/projects/deloughry-v2/src/components/layout/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://deloughry.co.uk");
const $$SkipLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-1.5 focus:left-1">skip to content
</a>`;
}, "C:/Users/matt/projects/deloughry-v2/src/components/SkipLink.astro", void 0);

const SoundWave = ({ progress, isPlaying }) => {
  const [animationTimings, setAnimationsTimings] = useState([]);
  const ref = useRef();
  useEffect(() => {
    const timings = [];
    for (let i = 0; i < 90; i++) {
      timings.push(Math.floor(Math.random() * 1e3) + 500 + "ms");
    }
    setAnimationsTimings(timings);
  }, []);
  const createLines = () => {
    const progressNum = Math.floor(progress / 2);
    const lines = [];
    let y1 = 20;
    let y2 = 0;
    for (let i = 1; i < 91; i++) {
      lines.push(
        /* @__PURE__ */ jsx(
          "line",
          {
            className: i <= progressNum ? "sw__full" : "",
            x1: i + i * 6,
            y1,
            x2: i + i * 6,
            y2,
            strokeWidth: "6",
            style: { animationDuration: animationTimings[i] }
          },
          i
        )
      );
    }
    return lines;
  };
  return /* @__PURE__ */ jsx("div", { className: `sw ${isPlaying ? "" : " sw--pause"}`, children: /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      width: "302",
      height: "28",
      viewBox: "0 0 344 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: createLines()
    }
  ) });
};

const ImageWithHeart = ({ image, isLiked, className }) => {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx("img", { src: image, className: "h-full w-full", alt: "Currently now-playing image" }),
    isLiked && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] ", children: /* @__PURE__ */ jsx(
      "svg",
      {
        className: "thumbsUp h-[70%] w-[70%] fill-accent-bg stroke-accent shadow-lg",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          }
        )
      }
    ) })
  ] });
};

const fetcher = (url) => fetch(url).then((res) => res.json());
function NowPlaying() {
  let interval = null;
  const [progress, setProgress] = useState(0);
  const { data, mutate, error, isLoading } = useSWR("https://api.deloughry.co.uk/spotify/now-playing", fetcher, {
    onSuccess: (data2) => {
      clearInterval(interval);
      setProgress(data2?.song?.progress);
    }
  });
  useEffect(() => {
    if (data) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= data?.song?.duration) {
            clearInterval(interval);
            mutate();
          }
          return prev + 1e3;
        });
      }, 1e3);
    }
    return () => clearInterval(interval);
  }, [data?.song?.progress, data?.song?.duration]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${data?.isPlaying ? "visible" : "invisible"} flex flex-col justify-center align-middle transition-all duration-250 ease-in-out`,
      children: [
        data?.isPlaying && /* @__PURE__ */ jsxs("div", { className: "sticky space-around mb-4 flex w-full items-center space-x-0 overflow-hidden rounded-lg bg-zinc-200 p-2 align-middle shadow-lg dark:bg-zinc-700 sm:space-x-2", children: [
          /* @__PURE__ */ jsx(
            ImageWithHeart,
            {
              image: data?.song?.albumArt[2].url,
              className: "relative mr-2 w-[70px] aspect-square",
              isLiked: data?.song?.isLiked
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "flex-col items-center sm:flex-row", children: data?.isPlaying ? /* @__PURE__ */ jsxs(
              "a",
              {
                className: "capsize font-sm text-wrap flex w-full flex-col flex-wrap truncate break-all dark:text-white no-underline",
                href: data?.song?.uri,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "truncaste text-accent font-oswald font-bold text-lg uupercase", children: data?.song?.name }),
                  /* @__PURE__ */ jsx("span", { className: "capsize truncate break-all text-xs text-zinc-700 dark:text-gray-200", children: data?.song?.artist })
                ]
              }
            ) : /* @__PURE__ */ jsx("p", { className: "capsize font-md text-gray-200", children: "Not Playing" }) }),
            /* @__PURE__ */ jsx(
              SoundWave,
              {
                progress: Math.floor(progress / data?.song?.duration * 100) || 0,
                isPlaying: data?.isPlaying
              }
            )
          ] })
        ] }),
        !data?.isPlaying && /* @__PURE__ */ jsx("p", { className: "min-h-[102px]", children: "Spotify Not Playing" })
      ]
    }
  );
}

const $$Astro$3 = createAstro("https://deloughry.co.uk");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/matt/projects/deloughry-v2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro("https://deloughry.co.uk");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/matt/projects/deloughry-v2/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://deloughry.co.uk");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    meta: { title, description = siteMeta.description, ogImage, articleDate }
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "> <head>", "<script>(function(){", `
			const root = document.documentElement;
			const colorThemeMetaTag = document.querySelector("meta[name='theme-color']");
			// get user preference of dark mode, 1st local storage, 2nd browser
			function getThemePreference() {
        console.log("data", typeof localStorage, localStorage.getItem("theme"))
				if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
					return localStorage.getItem("theme");
				}
				return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			}


      function watchTheme(){
			  const isDark = getThemePreference() === "dark";
        console.log('watchTheme',isDark);
        // watch document element class attribute and update user preference when it changes.
        const observer = new MutationObserver(() => {
          const rootIsDark = root.classList.contains("dark");
          // set the meta attribute
          colorThemeMetaTag.setAttribute(
            "content",
            siteConfig[rootIsDark ? "themeColorDark" : "themeColorLight"]
          );

        });
        observer.observe(root, { attributeFilter: ["class"] });

        // initailse root class attribute
        root.classList.toggle("dark", isDark);
      }

      document.addEventListener("DOMContentLoaded", watchTheme);
      document.addEventListener("astro:after-swap", watchTheme);
		})();<\/script><link rel="webmention" href="https://webmention.io/deloughry.co.uk/webmention"><link rel="pingback" href="https://webmention.io/deloughry.co.uk/xmlrpc">`, "", "</head> <body> ", " ", ' <main id="main" class="flex-1"> ', " ", " </main> ", " ", " </body></html>"])), addAttribute(siteMeta.lang, "lang"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "ogImage": ogImage, "articleDate": articleDate }), defineScriptVars({ siteConfig: siteMeta }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "SkipLink", $$SkipLink, {}), renderComponent($$result, "Header", $$Header, { "data-astro-transition-scope": renderTransition($$result, "tzwrtu2g", "", "header") }), renderComponent($$result, "NowPlaying", NowPlaying, { "client:load": true, "data-astro-transition-persist": "now-playing", "client:component-hydration": "load", "client:component-path": "src/components/NowPlaying", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result, "l7phgyim", "slide", "now-playing") }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "SpeedInsights", $$Index$1, {}));
}, "C:/Users/matt/projects/deloughry-v2/src/layouts/Base.astro", "self");

const numofRows = 20;
const numofCols = 20;
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];
const pulsarPattern = [
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]
];
const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numofRows; i++) {
    rows.push(Array.from(Array(numofCols), () => 0));
  }
  return rows;
};
const GameOfLife = () => {
  const [grid, setGrid] = useState(() => {
    const rows = generateEmptyGrid();
    const startRow = Math.floor(numofRows / 2) - Math.floor(pulsarPattern.length / 2);
    const startCol = Math.floor(numofCols / 2) - Math.floor(pulsarPattern[0].length / 2);
    for (let i = 0; i < pulsarPattern.length; i++) {
      for (let j = 0; j < pulsarPattern[i].length; j++) {
        rows[startRow + i][startCol + j] = pulsarPattern[i][j];
      }
    }
    return rows;
  });
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((oldGrid) => {
      const newGrid = JSON.parse(JSON.stringify(oldGrid));
      for (let i = 0; i < numofRows; i++) {
        for (let j = 0; j < numofCols; j++) {
          let neighbors = 0;
          operations.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = j + y;
            if (newI >= 0 && newI < numofRows && newJ >= 0 && newJ < numofCols) {
              neighbors += oldGrid[newI][newJ];
            }
          });
          if (neighbors < 2 || neighbors > 3) {
            newGrid[i][j] = 0;
          } else if (oldGrid[i][j] === 0 && neighbors === 3) {
            newGrid[i][j] = 1;
          }
        }
      }
      return newGrid;
    });
    setTimeout(runSimulation, 200);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h2", { children: "React" }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center justify-center align-middle", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          class: "flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-bgColor shadow-sm hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark",
          onClick: () => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          },
          children: running ? "Stop" : "Start"
        }
      ),
      /* @__PURE__ */ jsx("button", { onClick: () => setGrid(generateEmptyGrid()), class: "flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-bgColor shadow-sm hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark", children: "Clear" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          class: "flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-bgColor shadow-sm hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-dark",
          onClick: () => {
            const rows = generateEmptyGrid();
            for (let i = 0; i < numofRows; i++) {
              for (let j = 0; j < numofCols; j++) {
                rows[i][j] = Math.random() > 0.7 ? 1 : 0;
              }
            }
            setGrid(rows);
          },
          children: "Random"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-20 gap-1 mt-8", children: grid.flatMap(
      (rows, i) => rows.flatMap((col, j) => /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => {
            const newGrid = [...grid];
            newGrid[i][j] = grid[i][j] ? 0 : 1;
            setGrid(newGrid);
          },
          className: `w-6 h-6 rounded-md shadow transition-all duration-300 transform hover:cursor-pointer hover:scale-110 ${grid[i][j] ? "bg-accent hover:bg-accent-dark" : "bg-accent-bg hover:brightness-50"}`
        },
        `${i}-${j}`
      ))
    ) })
  ] });
};

const $$Astro = createAstro("https://deloughry.co.uk");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const meta = {
    title: "Game of Life",
    description: ""
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6"> <h1 class="title">Game Of Life</h1> ${renderComponent($$result2, "GameOfLife", GameOfLife, { "client:load": true, "client:component-hydration": "load", "client:component-path": "src/components/GameOfLife/game", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/matt/projects/deloughry-v2/src/pages/projects/gol/index.astro", void 0);

const $$file = "C:/Users/matt/projects/deloughry-v2/src/pages/projects/gol/index.astro";
const $$url = "/projects/gol";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Base as $, index as i, logoImg as l, siteMeta as s };

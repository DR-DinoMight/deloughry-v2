const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  darkMode: "class",
  corePlugins: {
    // disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
    aspectRatio: false,
    // disable some core plugins as they are included in the css, even when unused
    touchAction: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    scrollSnapType: false,
    borderOpacity: false,
    textOpacity: false,
    fontVariantNumeric: false,
  },
  theme: {
    listStyleType: {
      decimal: "decimal",
      disc: "disc",
    },
    extend: {
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
        '50': 'repeat(50, minmax(0, 1fr))',
      },
      fontSize: {
        '20xl': '8rem',
      },
      colors: {
        bgColor: "var(--theme-bg)",
        textColor: "var(--theme-text)",
        link: "var(--theme-link)",
        accent: "var(--theme-accent)",
        "accent-dark": "var(--theme-accent-hover)",
        "accent-bg": "var(--theme-accent-bg)",
        twitch: "var(--twitch)",
        twitter: "var(--twitter)",
        mastodon: "var(--mastodon)",
        youtube: "var(--youtube)",
        claw: "var(--claw)",
        github: "var(--github)",

      },
      fontFamily: {
        // Add any custom fonts here
        'oswald': 'Oswald',
        'roboto': 'Roboto',
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
      },
      transitionProperty: {
        height: "height",
      },
      typography: (theme) => ({
        cactus: {
          css: {
            "--tw-prose-body": "var(--theme-text)",
            "--tw-prose-headings": "var(--theme-accent)",
            "--tw-prose-links": "var(--theme-text)",
            "--tw-prose-bold": "var(--theme-text)",
            "--tw-prose-bullets": "var(--theme-text)",
            "--tw-prose-quotes": "var(--theme-quote)",
            "--tw-prose-code": "var(--theme-text)",
            "--tw-prose-hr": "0.5px dashed #666",
            "--tw-prose-th-borders": "#666",
          },
        },
        DEFAULT: {
          css: {
            a: {
              "@apply cactus-link text-accent": "",
            },
            strong: {
              fontWeight: "700",
            },
            code: {
              border: "1px dotted #666",
              borderRadius: "2px",
            },
            blockquote: {
              borderLeftWidth: "none",
            },
            hr: {
              borderTopStyle: "dashed",
            },
            thead: {
              borderBottomWidth: "none",
            },
            "thead th": {
              fontWeight: "700",
              borderBottom: "1px dashed #666",
            },
            "tbody tr": {
              borderBottomWidth: "none",
            },
            tfoot: {
              borderTop: "1px dashed #666",
            },
          },
        },
        sm: {
          css: {
            code: {
              fontSize: theme("fontSize.sm")[0],
              fontWeight: "400",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require('tailwind-scrollbar'),
    plugin(function ({ addComponents }) {
      addComponents({
        ".cactus-link": {
          color: "var(--theme-accent)",
          "@apply bg-[size:100%_6px] bg-bottom bg-repeat-x underline": {},
          "&:hover": {
            color: "var(--theme-link)",
          },
        },
        ".title": {
          "@apply text-2xl font-semibold text-accent": {},
        },
        ".prose p, .prose blockquote, .prose ul": {
          "@apply max-w-xl": {}
         },
        ".prose pre, .prose h1, .prose h2,.prose h3,.prose h4,.prose h5,.prose h6": {
          "@apply max-w-3xl": {}
         },
        ".prose pre": {
          // show y scrollbar always
          "@apply scrollbar scrollbar-thumb-accent scrollbar-track-accent": {},
        }
      });
    }),
  ],
};

import { a7 as __astro_tag_component__, j as Fragment, a6 as createVNode } from './astro_C0lg389B.mjs';
import { $ as $$Image } from './pages/generic_DfbWuyTh.mjs';
import 'clsx';

const frontmatter = {
  "title": "Integrating Webmentions with Next.JS",
  "publishDate": "24 April 2022",
  "description": "Let me introduce you to Webmentions - a recent discovery that brought back memories of pingbacks and Tumblr's social features. I had to implement it myself!",
  "tags": ["TIL"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "getting-started-with-webmentions",
    "text": "Getting started with Webmentions"
  }, {
    "depth": 3,
    "slug": "setting-up-webmentionio",
    "text": "Setting up webmention.io"
  }, {
    "depth": 3,
    "slug": "setting-up-bridgy",
    "text": "Setting up Bridgy"
  }, {
    "depth": 2,
    "slug": "outputting-the-data-to-your-website",
    "text": "Outputting the data to your website"
  }, {
    "depth": 3,
    "slug": "display-mentions-per-page",
    "text": "Display mentions per page."
  }, {
    "depth": 3,
    "slug": "separate-likes-reposts-and-chatter",
    "text": "Separate Likes, Reposts and Chatter"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "As with all my technical documents, I like to preface the articles, that I don\u2019t pretend to be a master in said topic, nor always do stuff the best way, these articles are here as a documentation of my exploration, and if you find this useful then awesome! If you see something you want to discuss please hit me up on twitter as I\u2019m always up for a good chat!"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Recently I had a few days off from work and what do I do? I found myself coding more and more features on the website\u2026You know what I do for a living, doh! But regardless I found myself having tons of fun and knocked out a blog post (", createVNode(_components.a, {
        href: "https://deloughry.co.uk/logs/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker",
        children: "Using MongoDB\u2019s Data API, Next.js with SWR to make a pack click tracker"
      }), "), next I read about ", createVNode(_components.a, {
        href: "https://www.w3.org/TR/webmention/",
        children: "Webmentions"
      }), " and suddenly was hit with a major case of nostalgia of the days of pingbacks and the days of seeing the long list of likes, shares and reposts on Tumblr (Yes! I was one of those angsty teenagers \u{1F61B})."]
    }), "\n", createVNode(_components.p, {
      children: ["Well, I had to implement it, and after doing some digging I found an awesome ", createVNode(_components.a, {
        href: "https://aboutmonica.com/blog/getting-started-with-webmention-next-js/",
        children: "article"
      }), " by ", createVNode(_components.a, {
        href: "https://aboutmonica.com",
        children: "Monica Powel"
      }), " where they documented a recent stream of ", createVNode(_components.a, {
        href: "https://www.learnwithjason.dev/webmention-next-js",
        children: "Jason Lengstorf\u2019s Learn with Jason"
      }), " on stream to build Webmentions into a Next.js and Netlify starter kit, I recommend that you start there if you want to learn more about ", createVNode(_components.a, {
        href: "https://aboutmonica.com/blog/getting-started-with-webmention-next-js/",
        children: "Getting Started with Webmention in Next Js"
      }), " that\u2019s what I did, and here I\u2019m just going to also document the modifications and tweaks I did to get it working how I wanted."]
    }), "\n", createVNode(_components.h2, {
      id: "getting-started-with-webmentions",
      children: "Getting started with Webmentions"
    }), "\n", createVNode(_components.p, {
      children: ["As mentioned in Monica\u2019s article the best way currently to get started is by using ", createVNode(_components.a, {
        href: "https://webmention.io",
        children: "webmention.io"
      }), " this is a hosted service that will handle all the incoming (and outgoing) Webmentions, so you don\u2019t have to build a service yourself (If people are interested I will happily look at what it take to host your own service). Alongside ", createVNode(_components.a, {
        href: "http://webmention.io",
        children: "webmention.io"
      }), " if you want to also include social media such as Twitter, GitHub (yes there\u2019s a social aspect to it too \u{1F61B}) we also want to use ", createVNode(_components.a, {
        href: "https://brid.gy/",
        children: "Bridgy"
      }), " This will do all the work of trawling each platform for any mentions, likes and reposts and convert them into Webmention format and post them to you if even does historical links too!"]
    }), "\n", createVNode(_components.h3, {
      id: "setting-up-webmentionio",
      children: ["Setting up ", createVNode(_components.a, {
        href: "http://webmention.io",
        children: "webmention.io"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["How I got started with ", createVNode(_components.a, {
        href: "http://Webmention.io",
        children: "webmention.io"
      }), " was pretty simple, all I had to do was to make sure I had either a Twitter or Github link to my respective profile on the homepage which I already had, so all that meant was that I just had to alter the existing social links and just add ", createVNode(_components.code, {
        children: "rel=\u2018me\u2019"
      }), " to both GitHub and Twitter links (it\u2019s also worth mentioning that you need the links that social bios provide to link to the site you are wanting to use Webmention on). Once I pushed the changes live I went back into ", createVNode(_components.a, {
        href: "undefined",
        children: "webmention.io"
      }), " and tried to authenticate again, this time it took me to the dashboard that enabled me to log into the dashboard ready for implementation."]
    }), "\n", createVNode(_components.p, {
      children: ["Once I met all the requirements, ", createVNode(_components.a, {
        href: "http://Webmentions.io",
        children: "webmention.io"
      }), " then required me to then add some links to the Head of my website\u2019s layout :"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code poimandres",
      style: {
        backgroundColor: "#1b1e28",
        color: "#a6accd",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "link"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1",
              fontStyle: "italic"
            },
            children: " rel"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "webmention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1",
              fontStyle: "italic"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://webmention.io/[USERNAME]/webmention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "link"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1",
              fontStyle: "italic"
            },
            children: " rel"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "pingback"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1",
              fontStyle: "italic"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://webmention.io/[USERNAME]/xmlrpc"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " />"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Navigating to one of these URLs you can see it is a simple form that will allow other sites, the ability to notify the site of a Webmention, or in the case of the second link the ability to use the old Pingback functionality with the newer Webmention standard."
    }), "\n", createVNode(_components.h3, {
      id: "setting-up-bridgy",
      children: "Setting up Bridgy"
    }), "\n", createVNode(_components.p, {
      children: ["So I, like many create tweets about posts and projects I do on Twitter, so being able to gain insights into the chatter about this, would be very brilliant and that\u2019s where ", createVNode(_components.a, {
        href: "https://brid.gy/",
        children: "Bridgy"
      }), " comes in this will do all the scraping for you and post the relevant mentions off to your Webmention implementation. To do this all you need to do is sign in and authorise Bridgy to see your timeline and profile to be able to investigate the relevant posts. Bridgy will require you to also make sure that the website in question is linked in your Bios."]
    }), "\n", createVNode(_components.p, {
      children: "Once set up you have the ability to see all the responses and manually crawl your currently logged in profile for any mentions, like in the example below."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.sanity.io/images/airrvxef/production/f2c50aef4dd36c14d4c7ec9590ad375fb0f741c1-1272x522.png",
        alt: "Screenshot of the Brdgy Dashboard show controls to Poll websites, along with a table of results"
      })
    }), "\n", createVNode(_components.h2, {
      id: "outputting-the-data-to-your-website",
      children: "Outputting the data to your website"
    }), "\n", createVNode(_components.p, {
      children: ["For a basic output of all the mentions on one page (which is what I recommend to start with) I\u2019ll point you to Monica\u2019s section about implementing it into a React/Next.js site ", createVNode(_components.a, {
        href: "https://aboutmonica.com/blog/getting-started-with-webmention-next-js/#fetching-and-rendering-webmentions",
        children: "here"
      }), ", this does an awesome job of getting you up and running."]
    }), "\n", createVNode(_components.p, {
      children: "Once I had implemented the above, I then had time to sit back and think of other possibilities and different techniques I could use."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Somehow tailor the output that I could display the Webmentions that relate to a certain page rather than just grabbing them all. - ", createVNode(_components.strong, {
          children: "Implemented"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Tailor the output further to separate the comments/chatter, likes and reposts so that I can visually represent them on the website.- ", createVNode(_components.strong, {
          children: "Implemented"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Or cache the output so that rather than pulling the mentions on the client side I could actually pull them and process them at build, or even Server Side Rendered. ", createVNode(_components.strong, {
          children: "- TODO"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["and could I possibly store the mentions in a database for historical purposes. ", createVNode(_components.strong, {
          children: "- TODO"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Now currently I\u2019ve only implemented two of the following, but I do plan on adding or at least exploring the idea of the last two points above and maybe doing a follow up when I come to actually implement it."
    }), "\n", createVNode(_components.h3, {
      id: "display-mentions-per-page",
      children: "Display mentions per page."
    }), "\n", createVNode(_components.p, {
      children: "So using the above I managed to get a basic list of mentions rendered to a page, but what about per page? I was thinking of all the ways I could go about this, the one I settled on is to create a separate effect file that I could then pass and optional parameter to that would allow me to go off and get all Webmentions for the entire site or go off and query just the URL in question."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code poimandres",
      style: {
        backgroundColor: "#1b1e28",
        color: "#a6accd",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "import "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " useEffect"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " useState"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "react"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " useWebMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "	const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "setMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " useState"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "any"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "undefined"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "	useEffect"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "		const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " wmUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://webmention.io/api/mentions.jf2?[USERNAME]&token=[TOKEN]"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0",
              fontStyle: "italic"
            },
            children: "		// Check if the url has been passed, if so use as the target url otherwise get all mentions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "		const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " target"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " `${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "wmUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "&target="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " wmUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "		fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "target"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "			."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "response"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " response"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "			."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "				if ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "					setMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "				}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "			});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "	}, []);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This allowed me to then use this in a component to just stick on every page I want to display Webmentions, now I know this is most efficient but as proof of concept, I think having it load on the client-side isn\u2019t too bad, especially for me when this will be going on the bottom of log posts where it\u2019ll be at the bottom of large pieces of content so by the time the user gets to it, it should have loaded."
    }), "\n", createVNode(_components.p, {
      children: "As for the component, I wanted to separate the likes and reposts from any mentions so I went ahead and tweaked the above code further."
    }), "\n", createVNode(_components.h3, {
      id: "separate-likes-reposts-and-chatter",
      children: "Separate Likes, Reposts and Chatter"
    }), "\n", createVNode(_components.p, {
      children: "I ended up producing something as followed, and again it\u2019s not the most efficient, but it allowed me to quickly separate the comments out and give me that quick dopamine hit it being able to see the likes at a quick glance \u{1F61B}"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.sanity.io/images/airrvxef/production/5f5a034cae7efd0002fe25664bfdb4a92172bc1b-1187x569.png",
        alt: "Example output of a custom webcomponents showing 7 likes along with avatars and 0 repost and 1 comment"
      })
    }), "\n", createVNode(_components.p, {
      children: "To do this I create a new Component and altered the Effect hook slightly to allow me to better split the content out."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code poimandres",
      style: {
        backgroundColor: "#1b1e28",
        color: "#a6accd",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "import "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " useEffect"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " useState"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "react"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " type"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " WebMentionsCollection"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "	likes"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "	reposts"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "	mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " any"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " useWebMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " WebMentionsCollection"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "	const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "setMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " useState"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "WebMentionsCollection"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " undefined"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ">("
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "undefined"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "	useEffect"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "		const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " wmUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://webmention.io/api/mentions.jf2?[USERNAME]&token=[TOKEN]"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0",
              fontStyle: "italic"
            },
            children: "		// Check if the url has been passed, if so use as the target url otherwise get all mentions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "		const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " target"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ?"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " `${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "wmUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "&target="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " wmUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "		fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "target"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "			."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "response"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " response"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "			."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "				if ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "					const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentionsWithoutLikeOrReposts"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "filter"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "						("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "wm-property"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "!=="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "like-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " &&"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "wm-property"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "!=="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "repost-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "					);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "					const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " totalLike"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "filter"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "						("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "wm-property"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "like-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "					);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "					const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " totalRepost"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "filter"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "						("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "wm-property"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "==="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "repost-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "					);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "					const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " WebMentionsCollection"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "						likes"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " totalLike"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "						reposts"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " totalRepost"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "						mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentionsWithoutLikeOrReposts"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "					};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "					setMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "				}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "			});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "	}, []);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Doing this allowed to pass and object back that had the ", createVNode(_components.code, {
        children: "mentions"
      }), ", ", createVNode(_components.code, {
        children: "likes"
      }), " and ", createVNode(_components.code, {
        children: "reposts"
      }), " to display separately, so the next step was to create a Component that allowed me to style and layout exactly as I wanted above."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code poimandres",
      style: {
        backgroundColor: "#1b1e28",
        color: "#a6accd",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "import "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " useWebMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " WebMentionsCollection"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "../hooks/useWebMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "import "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " stripDomainFromString"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " from"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "../helpers/TextHelpers"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "export default "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " WebMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?:"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " })"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "	const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " WebMentionsCollection"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " useWebMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "	const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentionTypes"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '		"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "in-reply-to"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Replied"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '		"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "bookmark-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Bookmarked"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '		"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mention-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Mentioned"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "		rsvp"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "RSVPed"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "	};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "	if"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: "		return"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "			<>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "				<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "					<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mb-4 flex flex-row"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "svg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-red mr-2 h-6 w-6"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								fill"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "none"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								stroke"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "currentColor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								viewBox"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0 0 24 24"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								xmlns"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "http://www.w3.org/2000/svg"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "path"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "									strokeLinecap"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "round"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "									strokeLinejoin"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "round"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "									strokeWidth"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "									d"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								/>{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "svg"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-red"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-white"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">Likes</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "> {webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "likes"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "length}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "flex flex-row "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							{webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "likes"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " index"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mr-2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " key"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{index}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										target"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "_blank"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										rel"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "noopener noreferrer"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										href"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										title"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "name}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "img"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											src"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "photo}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											alt"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Avatar for "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "border-red h-10 w-10  rounded-full border-2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										/>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "							))"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "					</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "					<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mb-4 flex flex-row"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "svg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-terminal-green h-6 w-6"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								fill"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "none"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								stroke"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "currentColor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								viewBox"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0 0 24 24"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								xmlns"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "http://www.w3.org/2000/svg"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "path"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "									strokeLinecap"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "round"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "									strokeLinejoin"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "round"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "									strokeWidth"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "									d"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								/>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "svg"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-terminal-green ml-2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-white"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">Reposts</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "> {webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "reposts"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "length}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "flex flex-row "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							{webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "reposts"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " index"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mr-2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " key"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{index}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										target"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "_blank"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										rel"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "noopener noreferrer"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										href"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										title"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "name}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "img"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											src"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "photo}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											alt"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Avatar for "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "like"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "border-terminal-green h-10 w-10  rounded-full border-2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										/>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "							))"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "					</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "				</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "				<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mt-6"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "					<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "h4"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "flex flex-row"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "svg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "							className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-purple mr-2 h-6 w-6"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "							fill"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "none"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "							stroke"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "currentColor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "							viewBox"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0 0 24 24"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "							xmlns"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "http://www.w3.org/2000/svg"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "path"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								strokeLinecap"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "round"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								strokeLinejoin"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "round"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								strokeWidth"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								d"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							/>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "svg"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						Mentions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "					</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "h4"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "					<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mt-4 flex flex-col "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "						{webMentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mentions"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "map"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " index"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "li"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								key"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{index}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "								className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "bg-black-300 border-purple duration-400 mb-4 overflow-hidden rounded-lg border-4 px-4 py-5 shadow transition-all sm:p-6"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "items item-center mb-6 flex flex-row align-middle"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										target"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "_blank"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										rel"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "noopener noreferrer"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										href"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										title"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "name}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "img"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											src"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "photo}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											alt"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Avatar for "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "border-purple h-10 w-10 rounded-full border-2"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										/>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "ml-2 self-center"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											target"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "_blank"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											rel"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "noopener noreferrer"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											href"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											title"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "name}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "											{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "name}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										{mentionTypes"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "wm-property"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "]]"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "} on{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "time"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "font-bold"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "											{"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " Date"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "published"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "toLocaleDateString"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "undefined"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "												year"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "numeric"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "												month"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "short"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "												day"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "numeric"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "											})"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "time"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										href"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-purple ml-4 self-center text-xs italic"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										target"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "_blank"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										rel"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "noopener noreferrer"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "										title"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Original Source"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "svg"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "h-4 w-4"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											fill"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "none"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											stroke"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "currentColor"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											viewBox"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0 0 24 24"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "											xmlns"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "http://www.w3.org/2000/svg"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "											<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "path"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "												strokeLinecap"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "round"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "												strokeLinejoin"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "round"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "												strokeWidth"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: "												d"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "											/>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "svg"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "content "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mb-6"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: '}>"{mention'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "content"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: 'text}"</'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "> "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "									{"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "small"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "text-purple text-xs italic"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "											..about the page{"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "											<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " target"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "_blank"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " rel"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "noopener noreferrer"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5",
              fontStyle: "italic"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "{mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "wm-target"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "												{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "stripDomainFromString"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "mention"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "wm-target"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "])"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "											</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "										</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "small"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "									)"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "								</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "							</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "						))"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "					</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "				</"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "			</>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "		);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "	}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " <></>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Hopefully, this is pretty self-explanatory, There are a few bits here that I think would be good to explain further."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code poimandres",
      style: {
        backgroundColor: "#1b1e28",
        color: "#a6accd",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " mentionTypes"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "in-reply-to"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Replied"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "bookmark-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Bookmarked"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "mention-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Mentioned"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "	rsvp"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ' "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "RSVPed"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Even though we are handling Likes and Reposts, Webmentions can also be a variety of other types that I wanted to display in a list rather than just an avatar and a counter, the snippet above allowed me to create a lookup table that depending on the type I could display a readable format of what action a user had taken on the mention."
    }), "\n", createVNode(_components.p, {
      children: ["The next bit I\u2019d like to mention is the ", createVNode(_components.code, {
        children: "stripDomainFromString"
      }), " the function I used for the source URL. As I am displaying Webmentions on individual posts, but also as a collective on the ", createVNode(_components.a, {
        href: "https://deloughry.co.uk/stats",
        children: "~/stats"
      }), " page I still wanted a way to associate a mention to a page so that the response didn\u2019t get lost and you could always attribute it to a post. The payload that a Webmention sends across contains a ", createVNode(_components.code, {
        children: "wm-target"
      }), " attribute that contains the URL that is referenced in the Webmention."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code poimandres",
      style: {
        backgroundColor: "#1b1e28",
        color: "#a6accd",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "entry"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "author"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '		"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "card"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '		"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "\u{1F9D1}\u200D\u2695\uFE0F_\u{1F996}\u{1F9E8} - Matthew Peck-Deloughry"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '		"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "photo"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://webmention.io/avatar/pbs.twimg.com/817f965c9121121359d91070628098de15e776dfd398fdd335411b37f521a043.jpg"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '		"'
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://twitter.com/DR_DinoMight"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "	},"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://twitter.com/DR_DinoMight/status/1516891049842642948#favorited-by-9951422"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "published"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "null"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "wm-received"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "2022-04-22T13:37:04Z"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "wm-id"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "1384738"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "wm-source"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://brid.gy/like/twitter/DR_DinoMight/1516891049842642948/9951422"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "wm-target"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://deloughry.co.uk/logs/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "like-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "https://deloughry.co.uk/logs/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "wm-property"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "like-of"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '	"'
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "wm-private"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '"'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "false"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "So taking this I decided if I just chop off the domain I could just output that URL to give some context and a link if people are interested in reading more."
    }), "\n", createVNode(_components.p, {
      children: ["And the ", createVNode(_components.code, {
        children: "stripDomainFromString"
      }), " is a simple function that just removes the domain"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code poimandres",
      style: {
        backgroundColor: "#1b1e28",
        color: "#a6accd",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0",
              fontStyle: "italic"
            },
            children: "// Grab the path from the url string"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " stripDomainFromString"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " string"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "replace"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "/^"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "https"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "?"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: ":\\/\\/"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "["
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "^"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1"
            },
            children: "\\/"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "]"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '""'
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "There you have it, this is how I implemented Webmentions on my website, I will be expanding this functionality as time goes on, as mentioned I\u2019d love to store these in a Mongo DB to be able to store the interactions for prosperity\u2019s sake, but also as part of a way to make the webmentions get loaded at the server level to alleviate the load on the client."
    }), "\n", createVNode(_components.p, {
      children: ["Another area that will be needed to be looked at some point and that\u2019s some form of pagination, ", createVNode(_components.a, {
        href: "http://webmention.io",
        children: "webmention.io"
      }), " do offer some functionality for this in the form of tacking on by using the ", createVNode(_components.code, {
        children: "per-page"
      }), " and ", createVNode(_components.code, {
        children: "page"
      }), " API calls, this is something that I don\u2019t really need just yet for my pokey lil\u2019 site, but it is a bit of functionality that is better to have than not."]
    }), "\n", createVNode(_components.p, {
      children: "Well, I hope you found this useful and as always if you\u2019d like to discuss this hit me up on Twitter and maybe even reference this URL to use the lovely Webmention functionality \u{1F600}"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/post/integrating-webmentions-with-next-js.mdx";
const file = "C:/Users/matt/projects/deloughry-v2/src/content/post/integrating-webmentions-with-next-js.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/matt/projects/deloughry-v2/src/content/post/integrating-webmentions-with-next-js.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

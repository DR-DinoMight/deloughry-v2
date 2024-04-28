import { a7 as __astro_tag_component__, j as Fragment, a6 as createVNode } from './astro_C0lg389B.mjs';
import { $ as $$Image } from './pages/generic_DfbWuyTh.mjs';
import 'clsx';

const frontmatter = {
  "title": "Using MongoDB\u2019s Data API, Next.js with SWR to make a page click tracker.",
  "publishDate": "20 April 2022",
  "description": "While building my new website, I wanted to understand its traffic, especially the logs, which contain both short and long-form posts. I aimed to identify which posts performed better or worse.",
  "tags": ["TIL", "Backend", "Archived"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "upserting-a-record",
    "text": "Upserting a record."
  }, {
    "depth": 3,
    "slug": "displaying-the-pages-views",
    "text": "Displaying the pages views"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "As with all my technical documents, I like to preface the articles, that I don\u2019t pretend to be a master in said topic, nor always do stuff the best way, these articles are here as a documentation of my exploration, and if you find this useful then awesome! If you see something you want to discuss please hit me up on twitter as I\u2019m always up for a good chat!"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "With a new website build, I wanted to learn what traffic was like on my website, more importantly, my \u201CLogs\u201D, as these posts are a mix of short and long forms. I just wanted to see which of these posts were doing better or worse, but I didn\u2019t want to go down the route of using a full-blown tracking service for multiple reasons:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "I don\u2019t want to mess around with the cookies and privacy stuff of Google analytics"
      }), "\n", createVNode(_components.li, {
        children: "I don\u2019t want to pay for an analytics service, like Fathom or Netlify Analytics package"
      }), "\n", createVNode(_components.li, {
        children: "Most of the analytic servicers are just way too complicated for just a page counter"
      }), "\n", createVNode(_components.li, {
        children: "I wanted to get my geek on and make something."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["I knew I\u2019d need some data housing to store the page URLs and clicks, and I\u2019ve recently started playing around with MongoDB\u2019s hosted solution ", createVNode(_components.a, {
        href: "https://www.mongodb.com/cloud/atlas/",
        children: "Atlas"
      }), " for some Data logging of my Air Quality Sensor ( a future log to come, keep an eye out ), and I was super impressed with it and I\u2019ve also not really done much NoSQL before\u2026so to me this seemed like a perfect excuse to play with it again. Heck even if it wasn\u2019t the right tool for me, I love tinkering with something trying to see if I can mould it to fit my needs, for me the best kinds of problems to solve!"]
    }), "\n", createVNode(_components.p, {
      children: "One of the newer features that MongoDB Atlas has is the Data API service this allows you to interact with the mongo database without having to install any extra packages, if you really wanted to you could just interact purely over Curl or WGET without even installing a package. Armed with this you should be able to do a fair bit of stuff in my opinion a lot quicker, and developing a proof of concept that bit easier!"
    }), "\n", createVNode(_components.p, {
      children: "I\u2019m not going to talk about how to get up and running with MongoDB and their Atlas offering, many smarter and more succinct people have done this, but I want to focus more on the Data API side do the bits that are new to me and hopefully new to you too! With that being said you should be able to get up a running with the free account."
    }), "\n", createVNode(_components.p, {
      children: ["You\u2019ll want to get a Database that we can use to store the website stats, for me I called this **website **as I plan to have more stats housed here in the future, and then I created a collection called ", createVNode(_components.strong, {
        children: "views"
      }), ". Now that we have something to store our data in we can get to the fun part and actually start recording."]
    }), "\n", createVNode(_components.p, {
      children: "First, we need to get the URL endpoint that Data API offers so we can interact with our database, You can find this by going to your Atlas dashboard and then clicking on Data API."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.sanity.io/images/airrvxef/production/046227717adf50330832e69505241cd16b0c2f79-165x105.png",
        alt: "test"
      })
    }), "\n", createVNode(_components.p, {
      children: "When the screen is loaded make sure you have Data API enabled for the Data source in question"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.sanity.io/images/airrvxef/production/53f807f2f5ee9ec36cb497f80b2e9d479682fbaa-1685x302.png",
        alt: "Screenshot of Atlas dashboard showing Data AP being enabled"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The next step would be to go ahead and generate an API key by clicking the \u201CCreate API Key\u201D button, make sure you take note of the key in your into your ", createVNode(_components.code, {
        children: ".env"
      }), " as ", createVNode(_components.code, {
        children: "ATLAS_DATA_KEY"
      }), " as it is only displayed to you the once, finally, copy the endpoint URL, into your .env something like ", createVNode(_components.code, {
        children: "ATLAS_DATA_URL "
      })]
    }), "\n", createVNode(_components.p, {
      children: "Now armed with everything that we need from MongoDB we can go ahead and create the functionality in our Next.js project."
    }), "\n", createVNode(_components.h3, {
      id: "upserting-a-record",
      children: "Upserting a record."
    }), "\n", createVNode(_components.p, {
      children: ["So as we don\u2019t want to have a new Document on each visit we want to make use of upserting documents, this will attempt to find the Document in question and update values but if it can\u2019t find the document it will then go ahead and create the document with the values required. As well as upserting we also don\u2019t want to have to read the document to get a count then increment the document then updating the with the new variable what we actually want to use here is one of Mongo\u2019s super useful and highly powerful operators ", createVNode(_components.code, {
        children: "$inc"
      }), " this will allow us to say in the update call to go get the value of a Field and increment it by a value all in the same call as the update!"]
    }), "\n", createVNode(_components.p, {
      children: ["Start by creating a file that we can house the interactions, for me I created ", createVNode(_components.code, {
        children: "/lib/atlas.ts"
      })]
    }), "\n", createVNode(_components.p, {
      children: "First, let\u2019s go grab our env variables and store them into a couple of constant variables"
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
            children: " dataUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " process"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "env"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "ATLAS_DATA_URL"
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
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " dataKey"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " process"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "env"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "ATLAS_DATA_KEY"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Next, create a function that we can call from a Next.js API Endpoint."
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
              color: "#ADD7FF"
            },
            children: " upsertPageView"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " async"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pageUrl"
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
              color: "#91B4D5"
            },
            children: "	const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " response"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " fetch"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "dataUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "/action/updateOne"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "		method"
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
            children: "POST"
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
            children: "		headers"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
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
            children: '			"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Access-Control-Request-Headers"
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
            children: "*"
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
            children: '			"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "api-key"
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
              color: "#E4F0FB"
            },
            children: " dataKey"
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
            children: '			"'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Content-Type"
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
            children: "application/json"
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
            children: "		},"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "		body"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " JSON"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "stringify"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "			dataSource"
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
            children: "<NAME OF DATASOURCE>"
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
            children: "			database"
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
            children: "<NAME OF DATABASE>"
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
            children: "			collection"
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
            children: "<NAME OF COLLECTION>"
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
            children: "			filter"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " name"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " pageUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " },"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "			update"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
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
            children: "				$inc"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
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
            children: "					views"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " 1"
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
            children: "				},"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "			},"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "			upsert"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " true"
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
            children: "		}),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "	});"
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
              color: "#5DE4C7C0"
            },
            children: " await"
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
            children: "();"
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
      children: ["To explain this a little, we are first defining the URL we to send the request to using the constants variable ", createVNode(_components.code, {
        children: "dataUrl"
      }), " with the addition of ", createVNode(_components.code, {
        children: "/action/updateOne"
      }), " which is the endpoint we are after this is the endpoint we are ", createVNode(_components.code, {
        children: "POST"
      }), "ing too and the rest of the endpoints are defined ", createVNode(_components.a, {
        href: "https://docs.atlas.mongodb.com/api/data-api-resources/#base-url",
        children: "here"
      }), " if you are interested (we\u2019ll be using another one later on in the post)."]
    }), "\n", createVNode(_components.p, {
      children: ["The next bit is the headers we need to allow us to interact with MongoDB\u2019s Data API standard stuff, with the addition of ", createVNode(_components.code, {
        children: "api-key"
      }), " which is using the API key that we stored earlier in the ", createVNode(_components.code, {
        children: ".env"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Onto the fun bit of the function and that\u2019s actually the body of the request! We first make a JSON string stating our common bits like dataSource, database, and collection ( granted these could be made a bit DRYer, but I like to get stuff working then tidy up later!)."
    }), "\n", createVNode(_components.p, {
      children: ["When doing updates to MongoDB we need to first tell MongoDB which document we want to update this is done by using the ", createVNode(_components.code, {
        children: "filter"
      }), " bit, we pass in an object on a key and value we want to use as a search so we want to find the document with a ", createVNode(_components.code, {
        children: "name"
      }), " of the passed in variable ", createVNode(_components.code, {
        children: "pageUrl"
      }), " for this post, we\u2019ll use my last (b)log post ", createVNode(_components.code, {
        children: "/logs/work-in-progress"
      }), " (", createVNode(_components.a, {
        href: "https://deloughry.co.uk/logs/work-in-progress",
        children: "why not give it a read?"
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: ["The last two bits of the body are the really juicy bits, first, we need to define the fields of the document we are going to be updating in our case that\u2019s ", createVNode(_components.code, {
        children: "views"
      }), " but as mentioned earlier we want to increment the number of views and not have to go fetch the document, read then update, so we can pass in a helper function that MongoDB provides and that\u2019s the ", createVNode(_components.code, {
        children: "$inc"
      }), " operator this accepts another key-value object which can be multiple fields you\u2019d like to update but in our case, we only need to do the one field, so we pass in the field ", createVNode(_components.code, {
        children: "views"
      }), " and how much we\u2019d like to increment by which is 1 ( this could also be a negative number if you wanted to decrease). The final bit that allows us to do the real magic that is the ", createVNode(_components.code, {
        children: '"upsert": true'
      }), " this tells MongoDB that if you don\u2019t find the record to update then insert it!."]
    }), "\n", createVNode(_components.p, {
      children: ["To be able to access this helper function we want a new bit of middleware to ", createVNode(_components.code, {
        children: "/page/_middleware.ts"
      }), " this will allow us to send the page view increment on page load."]
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
            children: " NextRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " NextResponse"
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
            children: " '"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "next/server"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
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
            children: " upsertPageView"
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
            children: "../lib/atlas"
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
              color: "#E4F0FBD0"
            },
            children: " functionmiddleware"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "req"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "NextRequest"
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
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pathname"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " req"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "nextUrl"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "  upsertPageView"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pathname"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
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
      children: "Now, this is nowhere near the perfect solution for this and will require more work before I suggest using it in production ( I\u2019d love to see some solutions to the problems again hit me up on Twitter ), such as being able to rate limit it so that you don\u2019t spam out page views to Atlas, only counting the visitor the once if visited the page in quick succession, and the last which is what we\u2019ll cover a basic solution now and that\u2019s to add a block list of pages/resources you don\u2019t want to track."
    }), "\n", createVNode(_components.p, {
      children: ["Back in the ", createVNode(_components.code, {
        children: "/lib/atlas.ts"
      }), " file create a new function something like:"]
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
              color: "#ADD7FF"
            },
            children: " isBlockedURL"
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
            children: "pathName"
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
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0",
              fontStyle: "italic"
            },
            children: "	//Create an block list of urls that should not be tracked some examples are"
          })
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
            children: " blockList"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ["
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
            children: "/api"
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
            children: "/images"
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
            children: ".jpg"
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
            children: ".png"
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
            children: ".svg"
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
            children: ".ico"
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
            children: ".css"
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
            children: ".js"
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
            children: ".json"
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
            children: ".woff"
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
            children: ".woff2"
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
            children: ".ttf"
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
            children: ".eot"
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
            children: ".otf"
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
            children: ".webmanifest"
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
            children: "	];"
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
            children: " blockList"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "some"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
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
            children: " pathName"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "includes"
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
            children: "));"
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
      children: ["Then back in the ", createVNode(_components.code, {
        children: "_middleware.ts "
      }), "file change the code to be"]
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
            children: " NextRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " NextResponse"
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
            children: " '"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "next/server"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
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
            children: " upsertPageView"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " isBlockedURL"
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
            children: "../lib/atlas"
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
              color: "#E4F0FBD0"
            },
            children: " functionmiddleware"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "req"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "NextRequest"
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
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pathname"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " req"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "nextUrl"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  if ("
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "isBlockedURL"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pathname"
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
              color: "#ADD7FF"
            },
            children: "		upsertPageView"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pathname"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")"
          })]
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
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This will take the URL and check that it isn\u2019t present in the list of endpoints we are not interested in and return if it should be blocked or not."
    }), "\n", createVNode(_components.p, {
      children: "And with that you are recording the page views if you start viewing pages, you should start seeing entries in Atlas like the following."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.sanity.io/images/airrvxef/production/ca5752c440d86a5d5dcd8f1848bc6732e6bc00d5-362x123.png",
        alt: "Screenshot showing the log entry stored in Atalas"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Mine will be slightly different as I have added an ", createVNode(_components.code, {
        children: "updatedAt"
      }), " attribute to mine, but for intents and purposes it should roughly look the same and you could call it finished depending on what you want to do with the data, however, let\u2019s extend this further and read the data back into the website so we can show the page views that the (b)logs are getting."]
    }), "\n", createVNode(_components.h3, {
      id: "displaying-the-pages-views",
      children: "Displaying the pages views"
    }), "\n", createVNode(_components.p, {
      children: ["Displaying the page views is actually quite simple all we need to do is make use of a new call to Atlas that, is somewhat similar to the one to update the page counter, pair that with ", createVNode(_components.a, {
        href: "https://swr.vercel.app/",
        children: "SWR"
      }), " we can pull the latest page views and display that next to a listing or on the page itself."]
    }), "\n", createVNode(_components.p, {
      children: ["Back in ", createVNode(_components.code, {
        children: "/lib/atlas.ts"
      }), " let us create a new function that we can go and search for the page in question and return it if found."]
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
              color: "#ADD7FF"
            },
            children: " getPageViewCount"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " async"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pageUrl"
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
            children: " ) "
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
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " response"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " awaitfetch"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "dataUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "/action/findOne"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "    method"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " '"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "POST"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
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
            children: "    headers"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
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
            children: "      '"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Access-Control-Request-Headers"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " '"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
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
            children: "      '"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "api-key"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " dataKey"
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
            children: "      '"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "Content-Type"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " '"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "application/json"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "    body"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " JSON"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "stringify"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '      "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "dataSource"
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
            children: "<NAME OF DATASOURCE>"
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
            children: '      "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "database"
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
            children: "<NAME OF DATABASE>"
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
            children: '      "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "collection"
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
            children: "<NAME OF COLLECTION>"
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
            children: '      "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "filter"
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
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: '        "'
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
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
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "pageUrl"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "    })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "  });"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["As you have seen this function is very similar to the upserting of the page, the difference being that we ", createVNode(_components.code, {
        children: "POST"
      }), "-ing to a new URL this time it\u2019s ", createVNode(_components.code, {
        children: "/findOne"
      }), " and the body of the request is slightly different, as we don\u2019t need to alter any data all we are interested in is finding the document that has the same name as what we have passed through."]
    }), "\n", createVNode(_components.p, {
      children: ["The next step is to create an API endpoint in our local API folder that we can use with SWR that keeps calling this function so we can get a constant status of the pageviews, I created a route ", createVNode(_components.code, {
        children: "/api/pagesviews.ts"
      }), " which will house the code to call the function we created earlier and just output the results of that as its response."]
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
            children: "type"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " NextApiRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " NextApiResponse"
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
            children: "next"
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
            children: " getPageViewCount"
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
            children: "../../lib/atlas"
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
            children: "export default async "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " handler"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "req"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " NextApiRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " res"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " NextApiResponse"
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
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0",
              fontStyle: "italic"
            },
            children: "	// Get the query string parameter url."
          })
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
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " u"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " }"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " req"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "query"
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
            children: "	// If no url provided, return an 0"
          })
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
              color: "#91B4D5"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "u"
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
              color: "#E4F0FB"
            },
            children: "		res"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "status"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "			pageviews"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: " 0"
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
            children: "		});"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0",
              fontStyle: "italic"
            },
            children: "	// Otherwise, return the number of pageviews for the provided url"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#767C9DB0",
              fontStyle: "italic"
            },
            children: "	// call  getPageViewCount(url)"
          })
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
            children: " pageviews"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7C0"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " getPageViewCount"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "u"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "toString"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "	res"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "status"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "		views"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " pageviews"
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
            children: "	});"
          })
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
      children: "The snippets shows that we are passing the URL via a query string, we could do this by looking at the body among a few other different techniques, but ultimately what we need to do in the API endpoint is get the URL in question and pass that through as a parameter to the function we created earlier."
    }), "\n", createVNode(_components.p, {
      children: "Having created the API handler we can get on to the last and arguably the most fun bit of this post and that is being able to display the page views in a component that can be used in multiple areas of the website."
    }), "\n", createVNode(_components.p, {
      children: ["In your components directory, you want to create a new component called PageViews ", createVNode(_components.code, {
        children: "/components/PageViews.tsx"
      }), " and in this we want to use SWR to go off to our internal API call and fetch the pages we\u2019re interested in, so the following code should sort us on this:"]
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
              color: "#ADD7FF"
            },
            children: "useSWR"
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
            children: "swr"
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
            children: " useRouter"
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
            children: "next/router"
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
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " fetcher"
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
              color: "#E4F0FBD0"
            },
            children: " fetch"
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
            children: ")."
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
            children: "r"
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
            children: " r"
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
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: " PageViews"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "className"
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
            children: " { url"
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
            children: "; className"
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
            children: " }) "
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
              color: "#E4F0FB"
            },
            children: " router"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " useRouter"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "();"
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
            children: "	// if url is not provided, use the current url"
          })
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
            children: " queryUrl"
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
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: " router"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "query"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "url"
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
              color: "#91B4D5"
            },
            children: "	const"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FBD0"
            },
            children: " useSWR"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "/api/pageviews?u="
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "queryUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}`"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "fetcher"
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
              color: "#5DE4C7C0"
            },
            children: "	return"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCDC0"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "={className}>{"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "data?.views || "
          }), createVNode(_components.span, {
            style: {
              color: "#5DE4C7"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "#91B4D5"
            },
            children: ">"
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
            children: "export default "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "PageViews"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Picking the above code apart we are using ", createVNode(_components.code, {
        children: "next/router"
      }), " to get the current URL just in case we don\u2019t pass anything through in the props, this is nice as it means if we wanted to display the page views of the page we are currently well we don\u2019t have to pass anything through to the component as it can automatically pick it up. Then the next bit is using SWR to go off and get our current page view counter, then lastly we return that as ", createVNode(_components.code, {
        children: "<span>"
      }), " passing through the ", createVNode(_components.code, {
        children: "className"
      }), " attribute from the calling of the component so that we can add styles however we like."]
    }), "\n", createVNode(_components.p, {
      children: "Finally, if we want to display this we only have to call the component the area we want to display the counter, for me I wanted to display it on the (b)log listing screen:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code poimandres",
      style: {
        backgroundColor: "#1b1e28",
        color: "#a6accd",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
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
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "Views "
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "PageViews"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1",
              fontStyle: "italic"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1",
              fontStyle: "italic"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#D0679D"
            },
            children: "/logs/${log.slug.current}`}"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1",
              fontStyle: "italic"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#A6ACCD"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#ADD7FF"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#5FB3A1",
              fontStyle: "italic"
            },
            children: "`${categoryTextColor}`}"
          }), createVNode(_components.span, {
            style: {
              color: "#E4F0FB"
            },
            children: "/></"
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
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Resulting in the following output (notice the Views section) or alternatively look at the top of the post \u{1F600}"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.sanity.io/images/airrvxef/production/2451ab50b3b0862a67cb6b70f622712a534f224b-952x245.png",
        alt: "Screenshot of my post listing showing view counter in action"
      })
    }), "\n", createVNode(_components.p, {
      children: "And there we have it! We\u2019ve used MongoDB, SWR and Next.js to create a tiny little analytical counter that isn\u2019t bloated, it is anonymous and end of the day it is a fun exercise in how to achieve a basic insight into your website. Now I\u2019ve already mentioned that it is code that I\u2019ve thrown together as a learning exercise and there could tons of extra wins that can be made and there may even be a few security improvements to be made, so why not take what I\u2019ve shown today and build upon it and share it with me, I\u2019d love to see where people take this!"
    }), "\n", createVNode(_components.p, {
      children: "But thanks for sticking around and reading what is my first tutorial post, please drop me a message and Twitter if you have any questions, and until next time av\u2019a good\u2019en! \u{1F44B}"
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
const url = "src/content/post/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker.mdx";
const file = "C:/Users/matt/projects/deloughry-v2/src/content/post/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/matt/projects/deloughry-v2/src/content/post/using-mongodb-s-data-api-next-js-with-swr-to-make-a-page-click-tracker.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

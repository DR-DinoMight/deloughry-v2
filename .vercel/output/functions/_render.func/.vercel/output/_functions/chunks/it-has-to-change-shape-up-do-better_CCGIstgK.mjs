import { a7 as __astro_tag_component__, j as Fragment, a6 as createVNode } from './astro_C0lg389B.mjs';
import { $ as $$Image } from './pages/generic_DfbWuyTh.mjs';
import 'clsx';

const frontmatter = {
  "title": "It has to change! Shape up! Do Better!",
  "publishDate": "20 May 2021",
  "description": "Straight off the bat\xA0DON'T EVER\xA0think it's acceptable to fire misogynistic, racial or even for that matter general abuse at another person no matter the person!",
  "tags": ["Life", "Important"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Straight off the bat,\xA0", createVNode(_components.strong, {
        children: "DON\u2019T EVER"
      }), "\xA0think it\u2019s acceptable to fire misogynistic, racial or even for that matter general abuse at another person no matter the person! Everyone in this world deserves and is entitled to the same levels of decency that you expect to be shown!"]
    }), "\n", createVNode(_components.p, {
      children: ["How can anyone think that it\u2019s acceptable to hurl abuse at women for doing just the basic things that if a man did it would be just the norm!? It\u2019s beyond me and this needs to change, If you want to do this then get lost, you do not earn the right to be on the internet, or classed as a respectful person of society!\xA0", createVNode(_components.strong, {
        children: "JUST STOP IT!"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Some of you reading this may be saying\xA0", createVNode(_components.strong, {
        children: "\u201CI don\u2019t ever bully, or throw abuse at anyone!\u201D"
      }), "\xA0great, but are you still being respectful to everyone!? What do I mean by that? Well if I have to explain it chances are you may be guilty of it!"]
    }), "\n", createVNode(_components.p, {
      children: ["Have you ever had the urge to explain something to someone (with or without them asking) that is of a different gender to you but you\u2019ve not spent the time to understand the problem at hand, not found out more about the person\u2019s experience on the topic? If this happened to you, would you feel annoyed? or even offended?\u2026 Yeah? Well, chances are you\u2019re\xA0", createVNode(_components.strong, {
        children: "Mansplaining!"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Whether it be reading an article, watching a YouTube video, or watching a streamer, why does gender have to come into it? Read and watch the content for that, the content! Not the person presenting it, don\u2019t mention their looks, gender and leave your sexist thoughts internalised or even better just don\u2019t have them, just don\u2019t objectify them!"
    }), "\n", createVNode(_components.p, {
      children: "One thing I see and I have been guilty of this myself (Yes I\u2019m not 100% free from guilt regarding this either), something I\u2019m actively working on and I hope I no longer do this now but happy to be called upon it if I am, is just sitting there and thinking"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "\u201CThat\u2019s terrible that someone has just done that towards that person\u201D"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "and not doing anything about it, this is wrong and as a privileged person I need to be doing my part and speaking up about it, and this isn\u2019t just a case of shouting at someone regarding their wrongdoings, as easy as it is to just default to this stance. Personally, I think to try to educate first, then if that fails yes, lambast away!"
    }), "\n", createVNode(_components.p, {
      children: "This isn\u2019t just a gender issue, it happens in all walks of life and everyone needs to do stuff to change this."
    }), "\n", createVNode(_components.p, {
      children: "And finally\u2026"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "I Matthew Peck-Deloughry, will take this no longer as a male who is actively in tech, treating people any differently is just plain wrong and I will help combat this! I am proud to call myself a Feminist and will do my utmost to help educate and change this horrible behaviour!"
      }), "\n"]
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
const url = "src/content/post/it-has-to-change-shape-up-do-better.mdx";
const file = "C:/Users/matt/projects/deloughry-v2/src/content/post/it-has-to-change-shape-up-do-better.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/matt/projects/deloughry-v2/src/content/post/it-has-to-change-shape-up-do-better.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

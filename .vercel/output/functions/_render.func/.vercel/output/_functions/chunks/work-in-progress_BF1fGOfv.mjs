import { a7 as __astro_tag_component__, j as Fragment, a6 as createVNode } from './astro_C0lg389B.mjs';
import { $ as $$Image } from './pages/generic_DfbWuyTh.mjs';
import 'clsx';

const frontmatter = {
  "title": "Work in Progress",
  "publishDate": "13 February 2022",
  "description": "I am a big believer in striking while the iron is hot, and personal projects are no exception! So today I've deployed the new look website, but it is still very much a WIP.",
  "tags": ["Backend"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I am a big believer in striking while the iron is hot, and personal projects are no exception! So today I\u2019ve deployed the new look website, but it is still very much a WIP."
    }), "\n", createVNode(_components.p, {
      children: "Okay, granted there are situations you should deploy a site half-finished; But I don\u2019t see why that should always be the case, especially for personal projects! I\u2019m already in a job that I\u2019m extremely happy with so not trying to impress anyone in the short term, and having something online that people can click on and see the progress as you go I just think there\u2019s something in that!"
    }), "\n", createVNode(_components.p, {
      children: "So from today you will see the progress over time change and adapt, to the latest projects I\u2019m working on or the little experiments I want to run, basically, this website is my ever-evolving ever-changing playground, I got into making website because of how dynamic they are well you do get any more dynamic then actively working on a site, so why not come along with me and follow my journey?"
    }), "\n", createVNode(_components.p, {
      children: "So for today\u2019s updates:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "I launched the site!"
      }), "\n", createVNode(_components.li, {
        children: ["and just released the ", createVNode(_components.a, {
          href: "https://deloughry.co.uk/stats",
          children: "Stats page"
        }), " which has my Spotify stats on it! \u{1F601}"]
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
const url = "src/content/post/work-in-progress.mdx";
const file = "C:/Users/matt/projects/deloughry-v2/src/content/post/work-in-progress.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/matt/projects/deloughry-v2/src/content/post/work-in-progress.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

export { renderers } from '../renderers.mjs';

const page = () => import('./pages/rss_Duskai3z.mjs').then(n => n.r);

export { page };

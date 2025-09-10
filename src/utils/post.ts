import {
	sortMDByDate,
	getUniqueBlogTags,
	getUniqueBlogTagsWithCount,
	getBlogPostsByTag
} from "./tags";

// Re-export the blog-specific functions for backward compatibility
export { sortMDByDate, getUniqueBlogTags as getUniqueTags, getUniqueBlogTagsWithCount as getUniqueTagsWithCount, getBlogPostsByTag };

import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url: { pathname }, locals }) => {
	const getBlogs = async () => {
		try {
			const projects = serializeNonPOJOs(await locals.pb.collection('bloc').getFullList());
			const blocs = serializeNonPOJOs(await locals.pb.collection('blocCat').getFullList());

			// Include both projects and blocs in the returned object
			return { projects, blocs };
		} catch (err) {
			console.log('Error: ', err);
			error(err.status, err.message);
		}
	};

	// Await the result of getBlogs() to ensure it resolves before returning
	const blogsData = await getBlogs();

	return { pathname, ...blogsData };
};

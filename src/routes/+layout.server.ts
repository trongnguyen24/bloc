import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url: { pathname }, locals }) => {
	const getBlogs = async () => {
		try {
			const projects = serializeNonPOJOs(await locals.pb.collection('bloc').getFullList());
			return projects;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};
	return { pathname, projects: getBlogs() };
};

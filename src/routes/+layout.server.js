/** @type {import('./$types').LayoutServerLoad} */
export const prerender = false;

import { bloccatStore } from '$lib/stores.js';

export async function load({ fetch, url }) {
	// Kiểm tra xem store đã có dữ liệu chưa
	let posts;
	const unsubscribe = bloccatStore.subscribe((value) => {
		posts = value;
	});
	unsubscribe();

	// Nếu store chưa có dữ liệu, fetch dữ liệu
	if (posts === null) {
		const response = await fetch(
			'https://api.baotangtohuu.org/api/collections/bloc_catalog/records?perPage=200'
		);
		posts = await response.json();
		bloccatStore.set(posts); // Cập nhật store
	}

	return { pathname: url.pathname, posts };
}

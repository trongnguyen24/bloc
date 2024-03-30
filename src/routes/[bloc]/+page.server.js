/** @type {import('./$types').PageServerLoad} */
import { blocStore, bloccatStore } from '$lib/stores.js';
export const prerender = false;

export async function load({ params, fetch }) {
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

	const postsCurrent = posts.items.find((item) => item.id === params.bloc);

	// Kiểm tra xem store đã có dữ liệu chưa
	let post;
	const unsubscribe2 = blocStore.subscribe((value) => {
		post = value;
	});
	unsubscribe2();

	// Nếu store chưa có dữ liệu, fetch dữ liệu
	if (post === null) {
		const response = await fetch(
			'https://api.baotangtohuu.org/api/collections/bloc/records?perPage=200'
		);
		post = await response.json();
		blocStore.set(post); // Cập nhật store
	}
	// filter all post with bloc.bloc === params.bloc
	post = post.items.filter((item) => item.bloc === params.bloc);
	return { postsCurrent, post };
}

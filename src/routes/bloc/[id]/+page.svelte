<script>
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data;

	let idbloc = $page.params.id;

	const bloc = data.projects.find((item) => item.id === idbloc);
</script>

<div class="pt-10 pb-16 mx-auto">
	<h2 class="text-balance font-fl-4 text-center text-primary-700">{bloc.name_vn}</h2>
	<div class="prose lg:prose-lg mt-8 mx-auto">
		{@html bloc.body_vn}
	</div>
</div>

<style>
	.prose img {
		max-width: 400px;
		width: 100%;
	}
</style>

<script>
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data;
	import { lang } from '$lib/stores';

	let idbloc = $page.params.id;

	const bloc = data.projects.find((item) => item.id === idbloc);
</script>

<div class="pt-10 pb-16 mx-auto">
	<h2 class="text-balance font-fl-3 font-bold uppercase text-center text-primary-700">
		{#if $lang === 'vn'}
			{bloc.name_vn}
		{/if}

		{#if $lang === 'en'}
			{bloc.name_en}
		{/if}
	</h2>
	<div class="prose lg:prose-2xl mt-8 px-6 mx-auto">
		{#if $lang === 'vn'}
			{@html bloc.body_vn}
		{/if}

		{#if $lang === 'en'}
			{@html bloc.body_en}
		{/if}
	</div>
</div>

<style>
</style>

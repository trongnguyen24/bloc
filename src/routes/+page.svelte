<script>
	import { onMount } from 'svelte';
	import { cata, lang } from '$lib/stores';
	cata.set('');
	/** @type {import('./$types').PageData} */
	export let data;

	// Sử dụng Set để lọc ra các giá trị duy nhất của thuộc tính 'bloc'
	var uniqueBlocValues = new Set(
		data.projects.map(function (item) {
			return item.bloc;
		})
	);

	// Chuyển kết quả từ Set thành mảng
	var uniqueBlocArray = Array.from(uniqueBlocValues);

	const a = ['bloc8', 'bloc9'];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-primary-700 flex flex-col min-h-screen justify-evenly items-center pt-8 pb-20">
	<div>
		<h1 class="w-full font-bold font-fl-2 text-center py-4">TỐ HỮU</h1>
		<h2 class="text-balance px-6 font-fl-4 w-full text-center">BLOC THƠ</h2>
	</div>
	<div class=" w-full px-9 max-w-5xl flex flex-col gap-8 md:gap-12 py-10">
		{#each uniqueBlocArray as a, i}
			<a
				href="/{a}"
				class="bg-surface-50/50 border border-surface-200 flex flex-row justify-between items-center rounded-lg text-surface-800 leading-normal p-6"
			>
				<h3 class="text-balance font-fl-4 w-full">{a}</h3>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="3"
					class="w-8 h-8 stroke-surface-100"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
					/>
				</svg>
			</a>
		{/each}
	</div>
</section>

<style>
</style>

<script>
	import { page } from '$app/stores';
	import Carousel from '$lib/Carousel.svelte';
	import { getImageURL } from '$lib/utils';
	import { cat, lang } from '$lib/stores';
	/** @type {import('./$types').PageData} */
	export let data;

	let bloccat = $page.params.bloc;
	console.log(data.blocs);

	cat.set(bloccat);

	var filteredData = data.projects.filter(function (item) {
		return item.bloc === bloccat;
	});

	const options = {
		contain: true,
		setGallerySize: true,
		prevNextButtons: true,
		pageDots: false
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-primary-700 flex flex-col min-h-screen justify-evenly items-center pt-8 pb-20">
	<div>
		<h1 class="w-full font-bold font-fl-2 text-center py-4">TỐ HỮU</h1>
		<h2 class="text-balance px-6 font-fl-4 w-full text-center">VỚI VĂN NGHỆ SĨ VÀ TRÍ THỨC</h2>
	</div>
	<div class="w-full">
		<Carousel {options}>
			{#each filteredData as item}
				<div class="px-6 py-10 first:pl-16 last:pr-16">
					<a
						href="/{item.bloc}/{item.id}"
						class="bg-surface-50/70 shadow-lg shadow-surface-500/10 overflow-hidden relative border border-surface-200 flex flex-col w-72 lg:w-80 justify-between items-end rounded-lg text-surface-600 leading-normal aspect-[6/7] p-8"
					>
						<h3 class="text-balance font-bold relative z-10 font-fl-4 uppercase w-full">
							{#if $lang === 'vn'}
								{item.name_vn}
							{/if}

							{#if $lang === 'en'}
								{item.name_en}
							{/if}
						</h3>
						{#if item.imagebg != ''}
							<div
								class="absolute grayscale h-full opacity-20 mix-blend-luminosity bg-cover bg-center w-full top-0 left-0 z-0"
								style="background-image: url({getImageURL(
									item.collectionId,
									item.id,
									item.imagebg,
									'400x0'
								)})"
							></div>
						{/if}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							class="w-16 h-16 relative z-10 stroke-surface-500/30"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
							/>
						</svg>
					</a>
				</div>
			{/each}
		</Carousel>
	</div>
</section>

<style>
	/* ::-webkit-scrollbar {
		width: 12px;
		height: 12px;
		border-radius: 12px;
	}

	::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 12px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #babca980;
		border-radius: 15px;
		border: 2px solid transparent;
		background-clip: padding-box;
	}

	::-webkit-scrollbar-thumb:hover,
	::-webkit-scrollbar-thumb:active {
		background-color: #a9b4bc;
	} */
</style>

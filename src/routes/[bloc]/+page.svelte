<script>
	import { page } from '$app/stores';
	import Carousel from '$lib/Carousel.svelte';
	import { getImageURL } from '$lib/utils';
	import { catStore, blocStore, cat, lang } from '$lib/stores';

	let bloc_value;
	blocStore.subscribe((value) => {
		bloc_value = value;
	});

	let cat_value;
	catStore.subscribe((value) => {
		cat_value = value;
	});

	let bloccat = $page.params.bloc;

	cat.set(bloccat);

	let blocdata = cat_value.find((item) => item.blocid === bloccat);

	var filteredData = bloc_value.filter(function (item) {
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
	<title>Bảo tàng Tố Hữu</title>
	<meta property="og:title" content="Bảo Tàng Tố Hữu" />
	<meta property="og:type" content="Bảo Tàng" />
	<meta
		name="description"
		content="Cuộc đời, sự nghiệp của Tố Hữu thông qua 7 tập thơ gắn liền với những giai đoạn lịch sử cách mạng của đất nước."
	/>
	<meta property="og:url" content="" />
	<meta property="og:image" content="https://bloc.baotangtohuu.org/baotangtohuu.jpg" />
</svelte:head>

<section class="text-primary-700 flex flex-col min-h-screen justify-evenly items-center pt-8 pb-20">
	<div>
		<h1 class="w-full font-bold font-fl-2 text-center py-2">TỐ HỮU</h1>
		<h2 class="px-6 w-full mx-auto font-fl-4 uppercase text-balance text-center">
			{#if $lang === 'vn'}
				{blocdata.blocName_vn}
			{/if}

			{#if $lang === 'en'}
				{blocdata.blocName_en}
			{/if}
		</h2>
		<div class="px-4 mx-auto text-balance prose-lg max-w-4xl text-center">
			{#if $lang === 'vn'}
				{@html blocdata.body_vn}
			{/if}

			{#if $lang === 'en'}
				{@html blocdata.body_en}
			{/if}
		</div>
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
</style>

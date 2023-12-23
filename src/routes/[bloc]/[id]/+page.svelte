<script>
	import { page } from '$app/stores';
	import { getImageURL } from '$lib/utils';
	import { blocStore, albumStore, cat, lang } from '$lib/stores';

	let bloccat = $page.params.bloc;

	let album_value;
	let cap;
	albumStore.subscribe((value) => {
		album_value = value;
	});

	cat.set(bloccat);
	let bloc_value;

	blocStore.subscribe((value) => {
		bloc_value = value;
	});

	let idbloc = $page.params.id;

	const bloc = bloc_value.find((item) => item.id === idbloc);

	// let albumdata = album_value.items.find((item) => item.album === bloc.album);

	var filteredData = album_value.items.filter(function (item) {
		return item.album === bloc.album;
	});

	const startFancy = () =>
		Fancybox.bind('[data-fancybox="gallery"]', {
			//
		});

	function getDescription(item) {
		return $lang === 'vn' ? item.description_vn : item.description_en;
	}
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
<div class="pt-10 pb-16 mx-auto">
	<h2 class="text-balance font-fl-3 font-bold uppercase text-center text-primary-700">
		{#if $lang === 'vn'}
			{bloc.name_vn}
		{/if}

		{#if $lang === 'en'}
			{bloc.name_en}
		{/if}
	</h2>
	<div class=" mx-auto text-center text-primary-700 text-lg">~~~</div>
	<div class="prose lg:prose-xl mt-4 px-6 mx-auto">
		{#if $lang === 'vn'}
			{@html bloc.body_vn}
		{/if}

		{#if $lang === 'en'}
			{@html bloc.body_en}
		{/if}
	</div>
	<!-- grid-cols-[repeat(auto-fill,minmax(340px,_1fr))] -->
	<div class="mx-auto max-w-5xl px-4 grid justify-center gap-4 lg:gap-8 pb-20 grid-cols-2">
		{#each filteredData as item}
			<a
				class="aspect-square relative overflow-hidden border-4 bg-surface-200/70 shadow-xl border-surface-200/80 p-2"
				on:click={startFancy}
				href={getImageURL(item.collectionId, item.id, item.image)}
				data-fancybox="gallery"
				data-caption={getDescription(item)}
			>
				<img
					class="object-contain w-full h-full"
					alt=""
					src={getImageURL(item.collectionId, item.id, item.image, '300x0')}
				/>
				<span
					class="absolute text-balance bottom-0 left-0 w-full px-4 h-12 justify-center flex items-center bg-gradient-to-t from-surface-200 to-surface-200/30"
				>
					<p class="line-clamp-2 text-center">
						{#if $lang === 'vn'}
							{item.description_vn}
						{/if}

						{#if $lang === 'en'}
							{item.description_en}
						{/if}
					</p>
				</span>
			</a>
		{/each}
	</div>
</div>

<style>
</style>

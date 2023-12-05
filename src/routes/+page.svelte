<script>
	import Carousel from 'svelte-flickity';
	const options = {
		draggable: '>2',
		freeScroll: true,
		cellAlign: 'left',
		prevNextButtons: false
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-primary-700 flex flex-col flex-wrap justify-center items-center py-12">
	<h1 class="text-7xl text-center py-4">TỐ HỮU</h1>
	<h2 class="text-3xl text-center">VỚI VĂN NGHỆ SĨ VÀ TRÍ THỨC</h2>

	<div class="snap-center scroll-smooth w-full px-9 flex overflow-auto gap-16 py-10">
		{#each Array.from({ length: 4 }) as _, i}
			<div
				class=" bg-surface-50/50 shrink-0 text-primary-700 text-2xl leading-normal aspect-[5/6] p-12 md:w-80"
			>
				NGUYỄN ĐÌNH THI
			</div>
		{/each}
	</div>
</section>

<style>
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
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
	}
</style>

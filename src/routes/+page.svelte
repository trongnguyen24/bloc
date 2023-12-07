<script>
	import Carousel from '$lib/Carousel.svelte';

	const options = {
		contain: true,
		setGallerySize: true,
		prevNextButtons: true,
		pageDots: false
	};
	const a = [
		'XUÂN DIỆU',
		'THƠ TẶNG BẠN',
		'KỶ NIỆM VỚI CÁC VĂN NGHỆ SĨ, TRÍ THỨC',
		'CĂN PHÒNG KHÁCH NHỎ Ở 76 PHAN ĐÌNH PHÙNG',
		'NGUYỄN ĐÌNH THI'
	];
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
	<!-- <div
		class=" snap-x scroll-smooth w-full max-w-full px-9 flex overflow-auto gap-8 md:gap-12 py-10"
	>
		{#each a as a, i}
			<a
				href="/"
				class="bg-surface-50/50 border border-surface-200 shrink-0 flex flex-col justify-between items-end rounded-lg text-surface-800 text-2xl leading-normal aspect-[5/6] p-8 basis-80 lg:basis-96 2xl:basis-[32rem]"
			>
				<h3 class="text-balance font-fl-4 w-full">{a}</h3>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="3"
					class="w-16 h-16 stroke-surface-100"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
					/>
				</svg>
			</a>
		{/each}
	</div> -->
	<div class="w-full">
		<Carousel {options}>
			{#each a as a, i}
				<div class="px-6 py-10 first:pl-16 last:pr-16">
					<a
						href="/"
						class="bg-surface-50/50 border border-surface-200 flex flex-col w-72 lg:w-80 justify-between items-end rounded-lg text-surface-800 leading-normal aspect-[6/7] p-8"
					>
						<h3 class="text-balance font-fl-4 w-full">{a}</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="3"
							class="w-16 h-16 stroke-surface-100"
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

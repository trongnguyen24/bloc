<script>
	import Carousel from 'svelte-flickity';
	const options = {
		draggable: '>2',
		freeScroll: true,
		cellAlign: 'left',
		prevNextButtons: false
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

<section class="text-primary-700 flex flex-col full-svh justify-center items-center pt-6 pb-12">
	<h1 class="text-7xl w-full text-center py-4">TỐ HỮU</h1>
	<h2 class="text-3xl text-balance w-full text-center">VỚI VĂN NGHỆ SĨ VÀ TRÍ THỨC</h2>

	<div class="snap-center scroll-smooth w-full px-9 flex overflow-auto gap-16 py-10">
		{#each a as a, i}
			<a
				href="/"
				class="card bg-surface-50/50 border border-surface-200 shrink-0 flex flex-col justify-between items-end rounded-lg text-surface-800 text-2xl leading-normal aspect-[5/6] p-8 md:w-80"
			>
				<p class="text-balance w-full">{a}</p>
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

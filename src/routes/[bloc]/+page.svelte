<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Carousel from '$lib/Carousel.svelte';
	import { getImageURL } from '$lib/utils';
	import { lang } from '$lib/stores';

	export let data;

	const startFancyvn = () =>
		Fancybox.bind('[data-fancybox="galleryvn"]', {
			showClass: false,
			Carousel: {
				Navigation: false
			},
			Toolbar: {
				display: {
					left: ['infobar'],
					middle: [],
					right: ['zoomIn', 'zoomOut', 'toggle1to1', 'slideshow', 'close']
				}
			}
		});

	const startFancyen = () =>
		Fancybox.bind('[data-fancybox="galleryen"]', {
			showClass: false,
			Carousel: {
				Navigation: false
			},
			Toolbar: {
				display: {
					left: ['infobar'],
					middle: [],
					right: ['zoomIn', 'zoomOut', 'toggle1to1', 'slideshow', 'close']
				}
			}
		});

	function updateParagraphs() {
		document.querySelectorAll('p').forEach((p) => {
			if (p.querySelector('img')) {
				p.classList.add('has-img');
			}
		});
	}

	function updateImages() {
		let vn = document.querySelector('#vn');

		if (vn) {
			let images = vn.querySelectorAll('img');
			images.forEach((img) => {
				// Thêm thuộc tính data-fancybox để kích hoạt Fancybox cho mỗi hình ảnh
				img.setAttribute('data-fancybox', 'galleryvn');
				img.addEventListener('click', startFancyvn);
			});
		}

		let en = document.querySelector('#en');

		if (en) {
			let images = en.querySelectorAll('img');
			images.forEach((img) => {
				// Thêm thuộc tính data-fancybox để kích hoạt Fancybox cho mỗi hình ảnh
				img.setAttribute('data-fancybox', 'galleryen');
				img.addEventListener('click', startFancyen);
			});
		}
	}

	onMount(() => {
		updateParagraphs();
		//delay 500ms and run below function
		setTimeout(() => {
			updateImages();
		}, 500);
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
	<div class="prose prose-xl">
		<!-- <h1 class="w-full font-bold font-fl-2 text-center py-2">TỐ HỮU</h1> -->
		<h2 class="px-6 text-primary-700 w-full mx-auto font-fl-4 uppercase text-balance text-center">
			{#if $lang === 'vn'}
				{data.postsCurrent.blocName_vn}
			{/if}

			{#if $lang === 'en'}
				{data.postsCurrent.blocName_en}
			{/if}
		</h2>
		<div class="px-4 mx-auto text-balance {$lang} prose-lg max-w-4xl text-center">
			<div id="vn">{@html data.postsCurrent.body_vn}</div>

			<div id="en">{@html data.postsCurrent.body_en}</div>
		</div>
	</div>
	<div class="w-full">
		<Carousel {options}>
			{#each data.post as item}
				<div class="px-6 py-10 first:pl-16 last:pr-16">
					<a
						href="/{item.bloc}/{item.id}"
						class="bg-surface-50/70 group hover:bg-surface-50/30 shadow-lg hover:scale-105 shadow-surface-500/10 hover:shadow-surface-500/30 overflow-hidden relative border border-surface-200 hover:border-surface-300 transition-all duration-700 flex flex-col w-72 lg:w-80 justify-between items-end rounded-lg text-surface-600 leading-normal aspect-[6/7] p-8"
					>
						<h3
							class="text-balance font-bold relative z-10 font-fl-4 drop-shadow-xl uppercase w-full"
						>
							{#if $lang === 'vn'}
								{item.name_vn}
							{/if}

							{#if $lang === 'en'}
								{item.name_en}
							{/if}
						</h3>
						{#if item.imagebg != ''}
							<img
								class="absolute grayscale h-full object-fill opacity-20 mix-blend-luminosity inset-0 z-0"
								alt=""
								src={getImageURL(item.collectionId, item.id, item.imagebg, '400x0')}
							/>
						{/if}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							class="w-16 h-16 relative z-10 transition-all duration-300 group-hover:stroke-surface-400/90 stroke-surface-500/30"
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
	.vn #en {
		display: none;
	}

	.en #vn {
		display: none;
	}
</style>

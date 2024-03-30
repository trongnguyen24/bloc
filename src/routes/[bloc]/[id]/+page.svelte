<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
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
<div class="pt-10 prose prose-xl pb-16 mx-auto">
	<h2 class="text-balance font-fl-3 font-bold uppercase text-center text-primary-700">
		{#if $lang === 'vn'}
			{data.postCurrent.name_vn}
		{/if}

		{#if $lang === 'en'}
			{data.postCurrent.name_en}
		{/if}
	</h2>
	<div class="mx-auto text-center text-primary-700 text-lg">~~~</div>
	<div id="con" class="prose {$lang} lg:prose-xl mt-4 px-6 mx-auto">
		<div id="vn">{@html data.postCurrent.body_vn}</div>

		<div id="en">{@html data.postCurrent.body_en}</div>
	</div>
	<p class="has-img"></p>
</div>

<style>
	.vn #en {
		display: none;
	}

	.en #vn {
		display: none;
	}
</style>

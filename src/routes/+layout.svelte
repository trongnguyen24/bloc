<script>
	import '../app.css';
	import { page } from '$app/stores';

	import { browser } from '$app/environment';
	import PageTransition from '$lib/PageTransition.svelte';
	import { cat, lang } from '$lib/stores.js';

	let page_value;
	cat.subscribe((value) => {
		page_value = value;
	});

	// function toggleLaang() {
	// 	bookmarkShow = !bookmarkShow;
	// 	if (bookmarkShow) {
	// 		localStorage.setItem('bookmarkShow', 'true');
	// 	} else {
	// 		localStorage.setItem('bookmarkShow', 'false');
	// 	}
	// }

	const toggleLang = () => {
		lang.update((currentLang) => {
			// Nếu giá trị hiện tại là "vn" thì chuyển sang "en", ngược lại chuyển sang "vn"
			return currentLang === 'vn' ? 'en' : 'vn';
		});
	};
	// if (browser) {
	// 	if (localStorage.bookmarkShow === 'true') {
	// 		toggleBookmark();
	// 	}
	// }
	export let data;
</script>

<div class="app">
	<main class="grid-cols-[1fr]">
		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
	</main>
	<footer
		class="fixed bottom-0 text-xs w-full flex items-center justify-center p-2 gap-2 bg-primary-700 text-surface-100 sm:text-base sm:p-4 sm:gap-8"
	>
		<div class="mr-auto">
			<a href="/{page_value}" class="flex justify-center text-base sm:text-3xl items-center">
				<p>BẢO TÀNG TỐ HỮU</p>
			</a>
		</div>
		<div class="flex justify-center">
			<a
				href="/{page_value}"
				class="items-center hover:clickfx inline-flex gap-1 hover:text-surface-200 focus-visible:text-surface-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
					/>
				</svg>
				{#if $lang === 'vn'}
					<p>MỤC LỤC</p>
				{/if}

				{#if $lang === 'en'}
					<p>CATALOGUE</p>
				{/if}
			</a>
		</div>
		<div class="flex justify-center">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				on:click={toggleLang}
				class="items-center cursor-pointer hover:clickfx inline-flex gap-1 hover:text-surface-200 focus-visible:text-surface-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
					/>
				</svg>

				{#if $lang === 'vn'}
					<p>VN</p>
				{/if}

				{#if $lang === 'en'}
					<p>EN</p>
				{/if}
			</div>
		</div>
	</footer>
</div>

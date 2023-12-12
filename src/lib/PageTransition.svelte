<script lang="ts">
	import { fly } from 'svelte/transition';
	export let pathname: string = '';
</script>

{#key pathname}
	<div
		class="row-start-1 col-start-1"
		in:fly={{ y: -10, duration: 300, delay: 400 }}
		out:fly={{ y: 5, duration: 300 }}
	>
		<slot />
	</div>
{/key}

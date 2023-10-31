<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	export let key: string;
</script>

<!-- {#key key}
	<div
		in:fly={{ y: -100, duration: 1600, delay: 300 }}
		out:fly={{ y: -50, duration: 1300 }}
		class="-z-50 h-0"
	>
		<slot />
	</div>
{/key} -->

{#key key}
	<div transition:fade={{ duration: 3300 }} class="-z-50 h-0">
		<slot />
	</div>
{/key}

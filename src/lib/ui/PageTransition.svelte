<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import Jellyfish from '$lib/ui/spinner/Jellyfish.svelte';
	import { onMount } from 'svelte';

	let ready = false;

	onMount(() => {
		// setTimeout(() => {
		ready = true;
		// }, 300);
	});
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
	{#if !ready}
		<Jellyfish />
	{/if}
	<div in:fly={{ delay: 0, duration: 1000 }} out:fly={{ duration: 1000, y: -10 }} class="z-50 h-0">
		<slot />
	</div>
{/key}

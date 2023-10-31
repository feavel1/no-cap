<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let ready = false;

	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, 5000);
	});
</script>

{#if !ready}
	<div><slot /></div>
{:else}
	<div></div>
{/if}

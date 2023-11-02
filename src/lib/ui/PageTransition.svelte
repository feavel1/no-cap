<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	export let key: string;
</script>

{#key key}
	<div
		in:fade={{ delay: 300, duration: 300 }}
		out:fly={{ duration: 300, y: -100 }}
		class="z-50 h-0"
	>
		<slot />
	</div>
{/key}

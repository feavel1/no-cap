<script lang="ts">
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { fade, type FadeParams } from 'svelte/transition';
	let ready = false;

	const typewriter = (node: Element, { speed = 1, easing = linear } = {}) => {
		const text = node.textContent ?? '';
		const duration = text.length / (speed * 0.005);
		return {
			easing,
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	};
	export let pageText: String;

	onMount(() => {
		ready = true;
		setTimeout(() => {
			ready = false;
		}, 5000);
	});
</script>

{#if ready}
	<div
		in:fade={{ delay: 500 }}
		out:fade={{ duration: 500 }}
		class="z-50 fixed text-3xl top-0 left-0 h-screen w-screen bg-surface-50 dark:bg-surface-900 flex flex-col items-center justify-center"
	>
		<div in:typewriter>
			<p class="font-mono font-black">NOCAP STUDIO -</p>
			{pageText}
		</div>
	</div>
{:else}
	<div><slot /></div>
{/if}

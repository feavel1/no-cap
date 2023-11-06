<script lang="ts">
	import { onMount } from 'svelte';
	import { linear } from 'svelte/easing';
	import { fade, type FadeParams } from 'svelte/transition';
	let ready: boolean;

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
		ready = false;
		setTimeout(() => {
			ready = true;
		}, 5000);
	});
</script>

{#if ready == false}
	<div
		in:fade={{ duration: 1000 }}
		out:fade={{ duration: 600 }}
		class="z-50 absolute text-3xl top-0 left-0 h-screen w-screen bg-surface-50 dark:bg-surface-900 flex flex-col items-center justify-center"
	>
		<div in:typewriter>
			<p class="font-mono font-black">NOCAP STUDIO -</p>
			{pageText}
		</div>
	</div>
{:else if ready == true}
	<slot />
{/if}

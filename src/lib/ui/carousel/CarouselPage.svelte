<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let modules;
	export let title: string;

	// Images batch load

	const images = Object.entries(modules).map((i) => i[1]);

	// Carousel load
	let currentSlideItem = 0;

	const nextImage = () => {
		carousel.goToNext();
	};

	const prevImage = () => {
		if (currentSlideItem != 0) {
			carousel.goToPrev();
		} else {
			carousel.goToPrev();
		}
	};

	function setNumber(e: any) {
		currentSlideItem = e.detail;
		console.log('number set to:' + currentSlideItem);
	}

	let carousel: { goToNext: () => void; goToPrev: () => void }; // for calling methods of the carousel instance

	let ready: boolean;

	onMount(() => {
		ready = false;
		setTimeout(() => {
			ready = true;
		}, 2500);
	});
</script>

<div class={ready ? 'block' : 'opacity-0'}>
	{#if browser}
		<Carousel on:pageChange={(event) => setNumber(event)} bind:this={carousel}>
			<div class="flex flex-col justify-center" on:click={() => prevImage()} slot="prev">
				<button class="btn-icon">←</button>
			</div>
			<div class="flex flex-col justify-center" slot="next" on:click={() => nextImage()}>
				<button class="btn-icon">→</button>
			</div>
			{#each images as src}
				<Img {src} class="w-auto mx-auto max-h-[80vh] my-img" />
			{/each}
		</Carousel>
	{/if}
	<div class="flex flex-col items-center justify-center mx-auto font-thin">
		<div>
			<span class="line-through">{currentSlideItem + 1}/{images.length}</span>
			<span class="font-bold">{title}</span>
		</div>
		<div class="capitalize">NOCAP all rights reserved ℗</div>
	</div>
</div>

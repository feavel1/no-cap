<script lang="ts">
	import { FxReveal as Img } from '@zerodevx/svelte-img';
	import OffWhite from '$lib/ui/spinner/OffWhite.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	// import mothersDay1 from '$lib/assets/key-vision/mothers-day/DadAndMom.jpg?as=run';

	// Images batch load
	const modules = import.meta.glob('$lib/assets/key-vision/mothers-day/*.*', {
		import: 'default',
		eager: true,
		query: { w: 1280, fit: 'outside', as: 'run' }
	});
	const images = Object.entries(modules).map((i) => i[1]);

	let currentSlideItem = 0;

	const nextImage = () => {
		currentSlideItem = (currentSlideItem + 1) % images.length;
	};

	const prevImage = () => {
		if (currentSlideItem != 0) {
			currentSlideItem = (currentSlideItem - 1) % images.length;
		} else {
			currentSlideItem = images.length - 1;
		}
	};
	// Carousel load

	let carousel: { goToNext: () => void }; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};
	let ref: any, loaded: boolean;
	onMount(() => {
		if (ref.complete) loaded = true;
	});
</script>

<OffWhite pageText="母亲节">
	<div class="flex flex-col items-center justify-center">
		{#if browser}
			<!-- <Carousel bind:this={carousel} let:loaded> -->
			<div class="flex mb-3">
				<button class="btn-icon variant-filled" on:click={() => prevImage()}>👈</button>
				<button class="btn-icon variant-filled" on:click={() => nextImage()}>👉</button>
			</div>
			{#each [images[currentSlideItem]] as src}
				<!-- <Img {src} alt="cat" class="rounded-md w-auto max-h-[80vh] my-img" /> -->
				<div class="relative overflow-hidden rounded-md">
					<Img {src} bind:ref class="w-auto max-h-[80vh] my-img" on:load={() => (loaded = true)} />
					<div class="blur absolute pointer-events-none inset-0" class:loaded />
				</div>
			{/each}
			<!-- </Carousel> -->
		{/if}
	</div>
</OffWhite>

<style>
	:global(.my-img) {
		/* These CSS vars (with their default values) are exposed */
		--reveal-transform: scale(1.03);
		--reveal-transition: opacity 1s ease-in, transform 0.8s ease-out;
		--reveal-filter: blur(20px);
	}

	.loaded {
		display: none;
	}
</style>

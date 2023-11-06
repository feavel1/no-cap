<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import OffWhite from '$lib/ui/spinner/OffWhite.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	// Images batch load
	const modules = import.meta.glob('$lib/assets/key-vision/mothers-day/*.*', {
		import: 'default',
		eager: true,
		query: { w: 1280, fit: 'outside', as: 'run' }
	});
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
</script>

<!-- <OffWhite pageText="母亲节"> -->
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
		<span class="font-bold">Mother's day</span>
	</div>
	<div class="capitalize">NOCAP all rights reserved ℗</div>
</div>
<!-- </OffWhite> -->

<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

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

	let ready: boolean = false;

	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, 1200);
	});

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
</script>

{#if browser && ready == true}
	<Carousel on:pageChange={(event) => setNumber(event)} bind:this={carousel}>
		<div class="absolute h-[100%] w-[50%]" on:click={() => prevImage()} slot="prev">
			<button id="button_left" class="btn-icon absolute h-full w-full z-50"></button>
		</div>
		<div
			class="absolute h-[100%] w-[50%] justify-end right-0"
			slot="next"
			on:click={() => nextImage()}
		>
			<button id="button_right" class="btn-icon absolute h-full w-full z-50"></button>
		</div>
		{#each images as src}
			<div class="w-min">
				<Img {src} class="w-auto mx-auto max-h-[80vh] my-img" />
			</div>
		{/each}
	</Carousel>
	<div class="font-thin">
		<div>
			<span class="line-through">{currentSlideItem + 1}/{images.length}</span>
			<span class="font-bold">{title}</span>
		</div>
		<div class="capitalize">NOCAP all rights reserved ℗</div>
	</div>
{/if}

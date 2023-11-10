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

	let ready: boolean = false;

	onMount(() => {
		setTimeout(() => {
			ready = true;
		}, 1200);
	});
</script>

{#if browser && ready == true}
	<Carousel on:pageChange={(event) => setNumber(event)} bind:this={carousel}>
		<div class="absolute sm:block hidden h-[100%] w-[50%]" on:click={() => prevImage()} slot="prev">
			<button class="cursor-l btn-icon absolute h-full w-full z-20" />
		</div>
		<div
			class="absolute sm:block hidden h-[100%] w-[50%] right-0"
			slot="next"
			on:click={() => nextImage()}
		>
			<button class="cursor-r btn-icon absolute h-full w-full z-20" />
		</div>
		{#each images as src}
			<div class="w-min select-none">
				<Img {src} class="w-auto mx-auto max-h-[70vh] lg:max-h-[80vh] my-img" />
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

<style>
	.cursor-l {
		cursor:
			url("data:image/svg+xml,%3Csvg width='94' height='74' class='backdrop-sepia drop-shadow-xl'  viewBox='0 0 94 74' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath id='Path' fill='none' stroke='%23000000' opacity='0.6' d='M 93.5 73.5 L 30 37.5 L 93.5 0.5'/%3E %3Cpath id='path1' fill='none' stroke='%231a1a1a' opacity='0.07' d='M 0.5 74 L 0.5 0'/%3E %3C/svg%3E ")
				8 8,
			pointer;
	}
	.cursor-r {
		cursor:
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='94px' height='74px'  stroke='%23000000'%3E%3Cpolyline opacity='0.6' fill='none' points='0.5,0.5 64,36.5 0.5,73.5 '%3E%3C/polyline%3E%3Cline opacity='0.07' fill='none' x1='93.5' y1='0' x2='93.5' y2='74'%3E%3C/line%3E%3C/svg%3E")
				8 8,
			pointer;
	}
</style>

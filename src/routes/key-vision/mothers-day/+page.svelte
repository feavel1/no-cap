<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import OffWhite from '$lib/ui/spinner/OffWhite.svelte';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	// import mothersDay1 from '$lib/assets/key-vision/mothers-day/DadAndMom.jpg?as=run';

	// Images batch load
	const modules = import.meta.glob('$lib/assets/key-vision/mothers-day/*.*', {
		import: 'default',
		eager: true,
		query: { w: 640, fit: 'cover', as: 'run' }
	});
	const images = Object.entries(modules).map((i) => i[1]);

	// Carousel load

	let carousel: { goToNext: () => void }; // for calling methods of the carousel instance

	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<!-- <OffWhite pageText="母亲节"> -->
{#if browser}
	<Carousel
		bind:this={carousel}
		let:loaded
		autoplay
		autoplayDuration={1500}
		autoplayProgressVisible
	>
		{#each images as src}
			<Img {src} alt="cat" />
		{/each}
	</Carousel>
{/if}
<!-- </OffWhite> -->

<script lang="ts">
	import OffWhite from '$lib/ui/spinner/OffWhite.svelte';
	import CarouselPage from '$lib/ui/carousel/CarouselPage.svelte';

	// Images batch load
	const modules = import.meta.glob('$lib/assets/key-vision/mothers-day/*.*', {
		import: 'default',
		eager: true,
		query: { w: 1280, fit: 'outside', as: 'run' }
	});
</script>

<OffWhite pageText="母亲节" />
<CarouselPage title="Mother's day" {modules} />

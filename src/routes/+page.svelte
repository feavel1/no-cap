<script lang="ts">
	import * as config from '$lib/config';
	import home from "$lib/assets/home/water.png"
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';

	const drawerStore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		bgDrawer: 'bg-white',
		bgBackdrop: '',
		width: 'min-w-full',
		height:"h-screen",
		padding: '',
		rounded: 'rounded-none',
		duration: 1000
	};

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<button class="fixed w-full h-full top-0 left-0 bg-center bg-fixed"  on:click={drawerOpen}>
	<img src={home} class="w-full h-full" alt="Home">
</button>
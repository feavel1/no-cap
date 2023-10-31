<script lang="ts">
	import * as config from '$lib/config';
	import home from "$lib/assets/home/water.png"
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import { fade, fly } from 'svelte/transition';

	const drawerStore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		id: 'example-3',
		bgDrawer: 'bg-surface-50 dark:bg-surface-900',
		bgBackdrop: '',
		width: 'min-w-full',
		padding: '',
		rounded: 'rounded-none',
		duration: 700
	};

	function drawerOpen(): void {
		drawerStore.open(drawerSettings);
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>


	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img class=" fixed bg-cover bg-center h-max min-w-full min-h-screen top-0 bottom-0 left-0 right-0 " on:click={drawerOpen} src={home} alt="Home">

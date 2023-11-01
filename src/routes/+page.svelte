<script lang="ts">
	import * as config from '$lib/config';
	import home from '$lib/assets/home/water.png';
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';

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

<button class="" on:click={drawerOpen}>
	<img
		class="fixed w-full h-full bg-no-repeat bg-center bg-cover bg-fixed top-0 left-0"
		in:fade={{ duration: 300 }}
		src={home}
		alt="Home"
	/>
</button>

<!-- <div class="w-full h-full bg-no-repeat bg-center bg-cover bg-fixed bg-[image:url('$lib/assets/home/water.png')]" /> -->

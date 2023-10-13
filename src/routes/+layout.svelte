<script lang="ts">
	import { page } from '$app/stores';

	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		// storeHighlightJs,
		Drawer,
		getDrawerStore,
		LightSwitch,
		autoModeWatcher,
		initializeStores,
		Toast
	} from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/ui/Navigation.svelte';
	import HamburgerIcon from '$lib/ui/HamburgerIcon.svelte';
	import Logo from '$lib/ui/icons/Logo.svelte';
	import PageTransition from '$lib/ui/PageTransition.svelte';
	import type { PageData } from './$types';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();
	const drawerStore = getDrawerStore();

	export let data: PageData;

	function drawerClose(): void {
		drawerStore.close();
	}

	$: positionClasses = $drawerStore.open ? 'translate-x-[-10%]' : '';

	// $: classesSidebar = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64';
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<Drawer position="right">
	<div class="flex items-center justify-between">
		<h2 class="p-4 h2">目录</h2>
		<button class="btn btn-sm mr-4 variant-filled-error" on:click={drawerClose}>
			<span>⛌</span>
		</button>
	</div>
	<hr />
	<Navigation />
</Drawer>

<!-- App Shell -->
<AppShell class="lg:px-8 py-4 transition-transform {positionClasses}">
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->
		<AppBar background="bg-surface-50-800-token">
			<svelte:fragment slot="lead">
				<div class="flex flex-row gap-2">
					<span class="hidden relative lg:flex h-3 w-3">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"
						/>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-primary-300"></span>
					</span>
					<a href="/">
						<Logo />
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<div class="flex items-center gap-2">
					<HamburgerIcon />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<PageTransition key={data.url}>
		<slot />
	</PageTransition>
</AppShell>

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
		Toast,
		type DrawerSettings
	} from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import home from '$lib/assets/home/water.png';

	import Navigation from '$lib/ui/Navigation.svelte';
	import HamburgerIcon from '$lib/ui/HamburgerIcon.svelte';
	import Logo from '$lib/ui/icons/Logo.svelte';
	import PageTransition from '$lib/ui/PageTransition.svelte';
	import type { PageData } from './$types';
	import Breadcrumbs from '$lib/ui/Breadcrumbs.svelte';
	import { onMount } from 'svelte';
	import Jellyfish from '$lib/ui/spinner/Jellyfish.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();
	const drawerStore = getDrawerStore();

	export let data: PageData;

	function drawerClose(): void {
		drawerStore.close();
	}

	let translate = 'translate-x-[-10%]';
	$: positionClasses = $drawerStore.open ? '' : '';

	let ready = false;

	// onMount(() => {
	// 	setTimeout(() => {
	// 		ready = true;
	// 	}, 300);
	// });

	// $: classesSidebar = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64';
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<Drawer position="left">
	<div class="flex items-center justify-between px-4 lg:px-8 py-5 z-50">
		<div class="flex flex-row justify-center gap-5">
			<div class="flex flex-row">
				<Logo />
			</div>
		</div>
		<button class="btn btn-sm variant-ghost-surface" on:click={drawerClose}>
			<span>⛌</span>
		</button>
	</div>
	<hr />
	<Navigation />
</Drawer>

<AppShell class="transition-transform {positionClasses} ">
	<svelte:fragment slot="header">
		<AppBar class="px-4 lg:px-8" background="">
			<svelte:fragment slot="lead">
				<div class="flex flex-row justify-center gap-5">
					<div class="flex flex-row">
						<a href="/">
							<Logo />
						</a>
					</div>
					<Breadcrumbs path={$page.url.pathname} />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<HamburgerIcon />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<div class="px-4 lg:px-8">
		<PageTransition key={data.url}>
			<slot />
		</PageTransition>
	</div>
</AppShell>

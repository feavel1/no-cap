<script lang="ts">
	import '../app.postcss';
	import * as config from '$lib/config';

	import {
		AppShell,
		AppBar,
		// storeHighlightJs,
		LightSwitch,
		autoModeWatcher,
		initializeStores,
		Modal,
		getModalStore,
		type ModalComponent
	} from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	import HamburgerIcon from '$lib/ui/HamburgerIcon.svelte';
	import Logo from '$lib/ui/icons/Logo.svelte';
	import PageTransition from '$lib/ui/PageTransition.svelte';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import CustomModalMenu from '$lib/ui/drawer/CustomModalMenu.svelte';
	import Breadcrumbs from '$lib/ui/Breadcrumbs.svelte';
	import Jellyfish from '$lib/ui/spinner/Jellyfish.svelte';
	import { page } from '$app/stores';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	const modalStore = getModalStore();

	export let data: PageData;

	let ready = false;

	onMount(() => {
		ready = true;
	});

	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		modalComponentOne: { ref: CustomModalMenu }
	};
</script>

<svelte:head>
	{@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
	<title>{config.title}</title>
</svelte:head>

<Modal
	components={modalRegistry}
	transitionIn={fade}
	transitionOut={fade}
	transitionInParams={{ duration: 600 }}
	transitionOutParams={{ duration: 500 }}
/>

<AppShell slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
		<AppBar class="px-4 lg:px-16 pt-2 pb-1 lg:pt-10" background="">
			<svelte:fragment slot="lead">
				<div class="flex flex-row align-middle justify-center gap-5">
					<div class="flex flex-row">
						<a href="/">
							<Logo path={$page.url.pathname} />
						</a>
					</div>
					<!-- <Breadcrumbs path={$page.url.pathname} /> -->
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<HamburgerIcon />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- {#if !ready}
		<Jellyfish />
	{/if} -->
	<PageTransition key={data.url}>
		<div class="px-4 lg:px-16">
			<slot />
		</div>
	</PageTransition>
</AppShell>

<script lang="ts">
	import * as config from '$lib/config';
	import home from '$lib/assets/home/water.png?format=webp&lossless';
	import { fade } from 'svelte/transition';

	//Modal
	import { type ModalSettings, getModalStore } from '@skeletonlabs/skeleton';
	const modal: ModalSettings = {
		type: 'component',
		component: 'modalComponentOne',
		backdropClasses: '!bg-surface-50 dark:!bg-surface-900'
	};
	const modalStore = getModalStore();
	function modalOpen(): void {
		modalStore.trigger(modal);
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<button on:mousedown={modalOpen}>
	<img
		class="fixed w-full h-full bg-no-repeat bg-center bg-cover bg-fixed top-0 left-0"
		in:fade={{ delay: 610, duration: 600 }}
		src={home}
		alt="Home"
	/>
</button>

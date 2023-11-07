<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
	export let href: string;
</script>

<li class="child-hover:line-through">
	<a on:click={drawerClose} {href} data-sveltekit-preload-code="eager">
		<slot />
	</a>
</li>

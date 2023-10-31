<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
	export let href: string;
</script>

<a on:click={drawerClose} {href}>
	<slot />
</a>

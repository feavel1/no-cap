<script lang="ts">
	import A from '../aLink/A.svelte';

	export let title: any;
</script>

<div class="relative w-80 mb-10">
	<h1 class="absolute top-0 right-0 text-xs">{title}</h1>
	<ul class="list">
		<slot />
	</ul>
</div>

<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="flex flex-col gap-5 p-4 max-w-7xl">
	<!-- Title -->
	<hgroup>
		<h1 class="h1">{data.meta.title}</h1>
		<p class="text-primary-400/50">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="gap-1 flex">
		{#each data.meta.categories as category}
			<span class="surface-4 badge variant-filled-secondary">&num;{category}</span>
		{/each}
	</div>

	<hr class="!border-dotted" />
	<!-- Post -->
	<div class="prose prose-xl">
		<svelte:component this={data.content} />
	</div>
</article>
<!-- 
<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style> -->

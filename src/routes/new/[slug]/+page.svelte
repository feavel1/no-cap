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
		<p class="text-primary-400/50">发布于： {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="gap-1 flex">
		{#each data.meta.categories as category}
			<span class="surface-4 badge variant-filled-secondary">&num;{category}</span>
		{/each}
	</div>

	<hr class="!border-dotted" />
	<!-- Post -->
	<div class="prose prose-xl dark:prose-invert">
		<svelte:component this={data.content} />
	</div>
</article>

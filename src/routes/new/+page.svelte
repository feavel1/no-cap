<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- Posts -->
<section class="max-w-6xl">
	<h1 class="h1 mb-10 font-mono">NEW</h1>
	<div class="list">
		{#each data.posts as post}
			<div class=" w-full block card-hover font-mono font-thin">
				<div class="p-4 space-y-4">
					<div>
						<a href="new/{post.slug}" class="h1 group text-primary transition duration-300">
							<div class="flex flex-row items-center justify-between">
								{post.title}
								<p class="badge variant-filled-secondary">{formatDate(post.date)}</p>
							</div>
							<span
								class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
							/>
						</a>
					</div>
					<p class="">{post.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

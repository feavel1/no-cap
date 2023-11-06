<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- Posts -->
<section class="max-w-6xl mt-2">
	<div class="list">
		{#each data.posts as post}
			<div class="w-full block rounded-sm outline outline-slate-400 outline-1">
				<div class="p-4 space-y-4">
					<div>
						<a href="new/{post.slug}" class="group text-primary transition duration-300">
							<div class="flex flex-row items-center justify-between font-bold">
								{post.title}
								<span class="badge text-xs variant-glass-primary">{formatDate(post.date)}</span>
							</div>
							<span
								class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
							/>
						</a>
					</div>
					<p class="font-extralight">{post.description}</p>
				</div>
			</div>
			<hr class="" />
		{/each}
	</div>
</section>

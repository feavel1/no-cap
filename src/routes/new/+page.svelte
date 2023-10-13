<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- Posts -->
<section class="max-w-7xl">
	<h1 class="h1 mb-10 font-mono">NEW</h1>
	<div class="list">
		{#each data.posts as post}
			<div class="card w-full block card-hover font-mono font-thin">
				<div class="p-4 space-y-4">
					<div>
						<a href="new/{post.slug}" class="h1 group text-primary transition duration-300">
							{post.title}
							<span
								class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"
							/>
						</a>
					</div>
					<p class="badge variant-filled-secondary">{formatDate(post.date)}</p>
					<p class="">{post.description}</p>
				</div>
			</div>
			<!-- <section class="card w-full block card-hover variant-glass-primary">
				<div class="p-4 space-y-4">
					<h1 class="h1 font-thin">{product.name}</h1>
					<div class="grid grid-cols-1 gap-8">
						<div class="">{product.description}</div>
					</div>
					<div class="flex flex-col">
						<span class="font-extrabold white text-3xl mb-2">
							{showPriceString(product, billingInterval)}
							<span class="text-base font-medium text-zinc-100 capitalize">
								/ {billingInterval}</span
							>
						</span>
						{#if subscription}
							<a class="btn variant-filled-primary" href="/profile">Manage subscription</a>
						{:else}
							<button
								on:click={() => handleCheckout(product)}
								class="btn variant-filled-primary"
								disabled={session ? false : true}
							>
								Subscribe
							</button>
						{/if}
					</div>
				</div>
			</section> -->
		{/each}
	</div>
</section>

<script>
	import Jellyfish from '$lib/ui/spinner/Jellyfish.svelte';
	import { onMount } from 'svelte';
	// import { fly } from 'svelte/transition';

	let ready = false;

	onMount(() => {
		// setTimeout(() => {
		// 	console.log('欢迎👏');
		ready = true;
		// }, 3000);
	});
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<!-- <div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2 font-extralight Inter">欢迎.</h2>

		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-filled-primary font-thin"
				href="https://skeleton.dev/"
				target="_blank"
				rel="noreferrer"
			>
				Launch Documentation
			</a>
		</div>
		<div class="space-y-2">
			<p>Try editing the following:</p>
			<p><code class="code">/src/routes/+layout.svelte</code></p>
			<p><code class="code">/src/routes/+page.svelte</code></p>
		</div>
	</div>
</div> -->

{#if !ready}
	<Jellyfish />
{:else}
	<div
		class="lg:grid grid-rows-6 grid-cols-2 lg:mt-[20%] list-nav p-4 mt-2 font-mono font-extralight"
	>
		<ul class="row-span-6 row-start-1">
			<li><a href="/key-vision">线下海报 / KEY VISION</a></li>
			<li><a href="/">电商 / E-COMMERCE DIAGRAM</a></li>

			<li>
				<a href="/posts">
					传媒 / SOCIAL MEDIA
					<span class="badge variant-filled ml-2">New!</span>
				</a>
			</li>

			<li>
				<a href="/">服装 / OUTFIT</a>
			</li>
			<li>
				<a href="/subscription">视频 / VIDEO</a>
			</li>

			<li>
				<a href="/products" class="">本月首推 / FIRST OF THE MONTH</a>
			</li>
		</ul>
		<ul class="row-span-4 row-start-3">
			<li>
				<a href="/">书籍 / BOOKS</a>
			</li>

			<li>
				<a href="/posts">
					成员信息 / MEMBERS
					<span class="badge variant-filled ml-2">New!</span>
				</a>
			</li>

			<li>
				<a href="/">NEW</a>
			</li>
			<li><a href="/subscription">合作方式 COLABORATION</a></li>
		</ul>
	</div>

	<hr />
	<div class="grid grid-cols-1 mt-10 list-nav p-4 font-mono font-extralight">
		<ul>
			<li>
				<a href="/posts">
					<p>NOCAP STUDIO</p>
				</a>
			</li>

			<li>
				<a href="/posts">
					<p>TEL: 130088826767</p>
				</a>
			</li>
		</ul>
	</div>
{/if}

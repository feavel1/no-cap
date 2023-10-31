<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import A from './aLink/A.svelte';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<nav class="list-nav p-4 mt-2 font-mono font-extralight" on:click={drawerClose}>
	<div class="lg:grid grid-rows-6 grid-cols-2 lg:mt-[20%] list-nav font-mono font-extralight">
		<ul class="row-span-6 row-start-1 child-hover:line-through">
			<li>
				<A href="/key-vision">
					线下海报 / KEY VISION <span class="badge variant-filled ml-2">New!</span>
				</A>
			</li>
			<li><A href="/">电商 / E-COMMERCE DIAGRAM</A></li>

			<li>
				<A href="/">传媒 / SOCIAL MEDIA</A>
			</li>

			<li>
				<A href="/">服装 / OUTFIT</A>
			</li>
			<li>
				<A href="/">视频 / VIDEO</A>
			</li>

			<li>
				<A href="/">本月首推 / FIRST OF THE MONTH</A>
			</li>
		</ul>
		<ul class="row-span-4 row-start-3 child-hover:line-through">
			<li>
				<A href="/">书籍 / BOOKS</A>
			</li>

			<li>
				<A href="/">成员信息 / MEMBERS</A>
			</li>

			<li>
				<A href="/new">NEW <span class="badge variant-filled ml-2">New!</span></A>
			</li>
			<li><A href="/">合作方式 COLABORATION</A></li>
		</ul>
	</div>

	<hr class="my-10" />

	<div class="lg:grid grid-cols-1 list-nav font-mono font-extralight">
		<ul>
			<li>
				<A href="/">
					<p>NOCAP STUDIO</p>
				</A>
			</li>

			<li>
				<A href="/">
					<p>TEL: 130088826767</p>
				</A>
			</li>
		</ul>
	</div>
</nav>

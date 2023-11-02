<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import A from './aLink/A.svelte';
	import Group from './home/Group.svelte';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<button
	on:click={drawerClose}
	class="fixed bottom-0 left-0 w-screen h-screen px-4 lg:px-8 font-thin"
>
	<div class="lg:grid grid-cols-2 max-w-6xl">
		<Group title="WORKS">
			<li>
				<A href="/key-vision">线下海报 / KEY VISION</A>
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
		</Group>

		<Group title="BRAND">
			<li>
				<A href="/">书籍 / BOOKS</A>
			</li>

			<li>
				<A href="/">成员信息 / MEMBERS</A>
			</li>

			<li>
				<A href="/new">NEW</A>
			</li>
			<li><A href="/">合作方式 COLABORATION</A></li>
		</Group>

		<div class="relative w-96 mb-10">
			<h1 class="absolute top-0 right-0 text-xs">Contact</h1>
			<ul class="list">
				<li>
					<p>NOCAP STUDIO</p>
				</li>
				<li>
					<p>TEL: 130088826767</p>
				</li>
			</ul>
		</div>
	</div>
</button>

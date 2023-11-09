<script lang="ts">
	import { getDrawerStore, getModalStore } from '@skeletonlabs/skeleton';
	import A from './aLink/A.svelte';
	import Group from './home/Group.svelte';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
	const modalStore = getModalStore();

	function modalClose(): void {
		modalStore.close();
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	on:click={modalClose}
	class="fixed w-screen h-screen top-0 left-0 font-thin mx-auto px-4 lg:px-16"
>
	<div class="absolute bottom-20">
		<div class="lg:grid grid-cols-2 gap-x-14">
			<Group title="WORKS">
				<A href="/works/key-vision">线下海报 / KEY VISION</A>

				<A href="/">电商 / E-COMMERCE DIAGRAM</A>

				<A href="/">传媒 / SOCIAL MEDIA</A>

				<A href="/">服装 / OUTFIT</A>

				<A href="/">视频 / VIDEO</A>

				<A href="/">本月首推 / FIRST OF THE MONTH</A>
			</Group>

			<Group title="BRAND">
				<A href="/">书籍 / BOOKS</A>

				<A href="/brand/members">成员信息 / MEMBERS</A>

				<A href="/new">NEW</A>

				<A href="/brand/colaboration">合作方式 COLABORATION</A>
			</Group>

			<div class="relative w-80 mb-10">
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
	</div>
</div>

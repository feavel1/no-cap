<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 mt-2 font-mono font-extralight">
	<ul>
		<li><a on:click={drawerClose} href="/">线下海报 / KEY VISION</a></li>
		<li><a on:click={drawerClose} href="/">电商 / E-COMMERCE DIAGRAM</a></li>

		<li>
			<a on:click={drawerClose} href="/posts">
				传媒 / SOCIAL MEDIA
				<span class="badge variant-filled ml-2">New!</span>
			</a>
		</li>

		<li>
			<a href="/">服装 / OUTFIT</a>
		</li>
		<li>
			<a on:click={drawerClose} href="/subscription">视频 / VIDEO</a>
		</li>

		<li>
			<a on:click={drawerClose} href="/products" class="">本月首推 / FIRST OF THE MONTH</a>
		</li>
	</ul>

	<!-- <hr /> -->
	<ul>
		<li>
			<a on:click={drawerClose} href="/">书籍 / BOOKS</a>
		</li>

		<li>
			<a on:click={drawerClose} href="/posts">
				成员信息 / MEMBERS
				<span class="badge variant-filled ml-2">New!</span>
			</a>
		</li>

		<li>
			<a href="/">NEW</a>
		</li>
		<li><a on:click={drawerClose} href="/subscription">合作方式 COLABORATION</a></li>
	</ul>
</nav>

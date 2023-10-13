<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4 mt-2 font-mono font-extralight">
	<ul>
		<li>
			<a on:click={drawerClose} href="/key-vision"
				>线下海报 / KEY VISION <span class="badge variant-filled ml-2">New!</span></a
			>
		</li>
		<li><a on:click={drawerClose} href="/">电商 / E-COMMERCE DIAGRAM</a></li>

		<li>
			<a on:click={drawerClose} href="/"> 传媒 / SOCIAL MEDIA </a>
		</li>

		<li>
			<a href="/">服装 / OUTFIT</a>
		</li>
		<li>
			<a on:click={drawerClose} href="/">视频 / VIDEO</a>
		</li>

		<li>
			<a on:click={drawerClose} href="/" class="">本月首推 / FIRST OF THE MONTH</a>
		</li>
	</ul>

	<hr class="!border-dashed my-2" />
	<ul>
		<li>
			<a on:click={drawerClose} href="/">书籍 / BOOKS</a>
		</li>

		<li>
			<a on:click={drawerClose} href="/"> 成员信息 / MEMBERS </a>
		</li>

		<li>
			<a href="/new">NEW<span class="badge variant-filled ml-2">New!</span></a>
		</li>
		<li><a on:click={drawerClose} href="/">合作方式 COLABORATION</a></li>
	</ul>
</nav>

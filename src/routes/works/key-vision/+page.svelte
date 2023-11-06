<script>
	import A from '$lib/ui/aLink/A.svelte';

	import Group from '$lib/ui/home/Group.svelte';
</script>

<div class="fixed w-screen h-screen top-0 left-0 mx-auto px-4 lg:px-8 font-thin">
	<div class="absolute bottom-20">
		<div class="lg:grid grid-cols-2 gap-x-14">
			<Group title="KEY-VISION">
				<A href="/works/key-vision/mothers-day">经典母亲节</A>
				<A href="/works/key-vision/gu-li-duo">谷粒多</A>
				<A href="/works/key-vision/dong-peng">东鹏</A>
				<A href="/works/key-vision/you-ke-shu">优可舒</A>
			</Group>

			<Group title="KEY-VISION">
				<A href="/">大家乐</A>
				<A href="/">植选</A>
				<A href="/">哈尔滨啤酒</A>
				<A href="/">纯水乐</A>
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

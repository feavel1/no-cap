<script>
	import A from '$lib/ui/aLink/A.svelte';

	import Group from '$lib/ui/home/Group.svelte';
</script>

<!-- <div class="lg:grid grid-rows-5 grid-cols-3 lg:mt-[20%] list-nav font-mono font-extralight">
	<ul class="row-span-5 row-start-1 child-hover:line-through">
		<li>
			<a href="/key-vision/mothers-day">
				经典母亲节 <span class="badge variant-filled ml-2">New!</span>
			</a>
		</li>
		<li><a href="/">舒化母亲节</a></li>

		<li>
			<a href="/">谷粒多</a>
		</li>

		<li>
			<a href="/">东鹏</a>
		</li>
		<li>
			<a href="/">优可舒</a>
		</li>
	</ul>
	<ul class="row-span-4 row-start-0 child-hover:line-through">
		<li>
			<a href="/">大家乐</a>
		</li>

		<li>
			<a href="/">植选</a>
		</li>

		<li>
			<a href="/new">哈尔滨啤酒 <span class="badge variant-filled ml-2">New!</span></a>
		</li>
		<li><a href="/">纯水乐</a></li>
	</ul>

	<ul class="row-span-4 row-start-0 child-hover:line-through">
		<li>
			<a href="/">Works</a>
		</li>
	</ul>
</div>

<hr class="my-10" />

<div class="lg:grid grid-cols-1 list-nav font-mono font-extralight">
	<ul>
		<li>
			<a href="/">
				<p>NOCAP STUDIO</p>
			</a>
		</li>

		<li>
			<a href="/">
				<p>TEL: 130088826767</p>
			</a>
		</li>
	</ul>
</div> -->

<div class="fixed w-screen h-screen top-0 left-0 mx-auto px-4 lg:px-8 font-thin">
	<div class="absolute bottom-20">
		<div class="lg:grid grid-cols-2 gap-x-14">
			<Group title="WORKS">
				<A href="/key-vision/mothers-day">经典母亲节</A>

				<A href="/">谷粒多</A>

				<A href="/">东鹏</A>

				<A href="/">优可舒</A>
			</Group>

			<Group title="BRAND">
				<A href="/">大家乐</A>

				<A href="/">植选</A>

				<A href="/new">哈尔滨啤酒</A>

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

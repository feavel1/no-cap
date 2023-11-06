<script lang="ts">
	// import SvelteSeo from 'svelte-seo';
	import BackTo from '$lib/ui/BackTo.svelte';
</script>

<!-- <SvelteSeo
	title="Feavel的部落 - {title}"
	description="."
	openGraph={{
		title: title + ' - Feavel的部落',
		description: '点击Feavel的部落中查看关于此内容的帖子',
		url: 'https://feavel-musci-camp.vercel.com',
		type: 'website'
	}}
	jsonLd={{
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://feavel-musci-camp.vercel.com'
		},
		headline: title,
		image: ['img-link.png', 'img-link.png', 'img-link.png'],
		datePublished: date,
		dateModified: date,
		author: {
			'@type': 'Person',
			name: author
		},
		publisher: {
			'@type': 'Organization',
			name: 'FEAVEL的部落',
			logo: {
				'@type': 'ImageObject',
				url: 'img-link.png'
			}
		}
	}}
/> -->

<div class="w-full max-w-3xl">
	<!-- <BackTo /> -->

	<div class="divider" />
	<div
		class="text-primary-900-50-token prose-lg prose w-full max-w-3xl first-letter:text-cyan-300 font-thin"
	>
		<slot />
	</div>
</div>

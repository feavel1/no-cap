<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { fade, fly, slide } from 'svelte/transition';
</script>

<div class="w-full max-w-3xl mt-2">
	<Accordion
		autocollapse
		transitionInParams={{ duration: 1000 }}
		transitionOutParams={{ duration: 1000 }}
		class="child:border-t-2 child:border-solid child:border-primary-400 "
	>
		<AccordionItem class="child:rounded-none">
			<svelte:fragment slot="lead">123</svelte:fragment>
			<svelte:fragment slot="summary">223</svelte:fragment>
			<svelte:fragment slot="content">(内容)</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead">
				<span class="mr-32">拍摄工作流程</span>
			</svelte:fragment>
			<svelte:fragment slot="summary">SHOOTING WORKFLOW</svelte:fragment>
			<svelte:fragment slot="content">(content)</svelte:fragment>
		</AccordionItem>
		<!-- ... -->
	</Accordion>
</div>

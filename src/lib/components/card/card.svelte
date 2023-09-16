<script>
	import Headline from '../typography/headline.svelte';
	import Paragraph from '../typography/paragraph.svelte';

	export let img = '/icon-brand-recognition.svg';
	export let headline = 'default';
</script>

<div class="bg-white rounded-md flex flex-col items-center">
	<div class="bg-DarkViolet rounded-full p-4 relative -translate-y-1/2">
		<img src={img} alt="" />
	</div>
	<div class="pb-8 px-4">
		<Headline textSize="text-xl">{headline}</Headline>
		<Paragraph>
			<slot />
		</Paragraph>
	</div>
</div>

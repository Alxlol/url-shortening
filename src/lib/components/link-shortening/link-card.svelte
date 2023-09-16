<script>
	import { fade } from 'svelte/transition';

	export let link;
	let copied = false;
	function copyText() {
		navigator.clipboard.writeText(link.shortLink);
		copied = true;
	}
</script>

<div
	transition:fade={{ duration: 400 }}
	class="bg-white rounded-md text-start p-4 flex flex-col gap-4 lg:flex-row lg:justify-between"
>
	<div class="flex flex-col lg:flex-row lg:justify-between lg:w-full lg:items-center">
		<p class=" text-sm">{link.originalLink}</p>
		<hr class="-m-2 my-1 lg:hidden" />
		<p class="text-Cyan text-sm">{link.shortLink}</p>
	</div>
	<button
		on:click={copyText}
		class=" {copied
			? 'bg-DarkViolet hover:bg-VeryDarkBlue'
			: 'bg-Cyan hover:bg-cyan-600'} transition-all duration-300 text-white w-full rounded-md py-1 lg:w-1/12"
		>{copied ? 'Copied' : 'Copy'}</button
	>
</div>

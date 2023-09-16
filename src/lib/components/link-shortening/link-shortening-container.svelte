<script>
	import LinkCard from './link-card.svelte';
	import UrlInput from './url-input.svelte';
	async function getShortURL() {
		try {
			const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
			const data = await response.json();
			links.push({ originalLink: data.result.original_link, shortLink: data.result.short_link2 });
			links = links;
			input = '';
		} catch (error) {
			errorState = true;
		}
	}

	let input = '';
	let errorState = false;
	let onSubmit = () => {
		getShortURL(input);
	};

	let links = [];
</script>

<div class="w-full">
	<UrlInput bind:input bind:onSubmit bind:errorState />
	<div class="-mt-10 mb-10 flex flex-col gap-4">
		{#each links as link}
			<LinkCard {link} />
		{/each}
	</div>
</div>

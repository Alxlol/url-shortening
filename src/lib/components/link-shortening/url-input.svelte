<script>
	export let input = '';
	export let onSubmit;
	export let errorState = false;
</script>

<div
	class="bg-DarkViolet p-6 lg:p-10 rounded-lg
    relative -translate-y-1/2 bg-shorten-mobile lg:bg-shorten-desktop bg-cover
"
>
	<form
		class="flex flex-col lg:flex-row gap-4 items-center"
		action="submit"
		on:submit|preventDefault={onSubmit}
	>
		<div class="w-full">
			<input
				bind:value={input}
				on:focus={() => (errorState = false)}
				placeholder="Shorten a link here..."
				class="w-full h-full p-2 lg:p-4 rounded-lg px-3 outline-Cyan"
				type="text"
			/>
			{#if errorState}
				<p class="text-Red lg:absolute mt-2 italic text-sm font-light text-start">
					Please add a link
				</p>
			{/if}
		</div>
		<button
			class="bg-Cyan hover:bg-cyan-300 text-white p-2 lg:p-4 rounded-lg font-semibold w-full lg:w-1/6"
			>Shorten It!</button
		>
	</form>
</div>

<div
	class="bg-DarkViolet p-6 lg:p-10 rounded-lg
    relative -translate-y-1/2 bg-shorten-mobile lg:bg-shorten-desktop bg-cover
"
>
	<form
		class="flex flex-col lg:flex-row gap-4"
		action="submit"
		on:submit|preventDefault={() => console.log('hei')}
	>
		<input placeholder="Shorten a link here..." class="w-full p-2 rounded-lg px-3" type="text" />
		<button class="bg-Cyan text-white px-4 py-2 rounded-lg font-bold w-full lg:w-1/6"
			>Shorten It!</button
		>
	</form>
</div>

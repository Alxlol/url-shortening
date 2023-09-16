<script>
	export let classes;
	export let onClick = () => {};
</script>

<button
	on:click|preventDefault={onClick}
	class="bg-Cyan hover:bg-cyan-300 text-white rounded-full {classes}"
>
	<slot />
</button>

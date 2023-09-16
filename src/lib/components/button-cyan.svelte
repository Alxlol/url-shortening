<script>
	export let classes;
	export let onClick = () => {
		console.log('clickEvent');
	};
</script>

<button on:click={onClick} class="bg-Cyan hover:bg-cyan-300 text-white rounded-full {classes}">
	<slot />
</button>

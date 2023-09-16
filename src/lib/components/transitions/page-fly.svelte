<script>
	import { fly } from 'svelte/transition';

	export let duration = 400;
	export let x = 0;
	export let y = 0;
</script>

<div in:fly={{ duration, x, y }}>
	<slot />
</div>

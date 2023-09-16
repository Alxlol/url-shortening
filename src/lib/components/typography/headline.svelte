<script>
	export let textSize = 'text-3xl';
	export let lgTextSize = '';
	export let textColor = 'text-VeryDarkBlue';
</script>

<p class="{textSize} {lgTextSize} font-bold {textColor} mb-2">
	<slot />
</p>

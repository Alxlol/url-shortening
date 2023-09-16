<script>
	import ButtonCyan from '../../lib/components/button-cyan.svelte';
	import PageFly from '../../lib/components/transitions/page-fly.svelte';
</script>

<section class="flex-grow flex items-center justify-center">
	<PageFly x="-800">
		<form class="flex flex-col bg-DarkViolet p-8 rounded-xl gap-4" action="submit">
			<p class="text-white text-2xl">Register</p>
			<input class="p-2 rounded-md" placeholder="Email" type="email" />
			<input class="p-2 rounded-md" placeholder="Password" type="password" />
			<input class="p-2 rounded-md" placeholder="Confirm Password" type="password" />
			<ButtonCyan classes="py-2">Sign Up</ButtonCyan>
		</form>
	</PageFly>
</section>

<script>
	import ButtonCyan from '../../lib/components/button-cyan.svelte';
	import PageFly from '../../lib/components/transitions/page-fly.svelte';
	import Icon from '@iconify/svelte';
	//
	let loading = false;
	let onClick = () => {
		loading = true;
		setTimeout(() => {
			loading = false;
			email = '';
			password = '';
			window.location.href = '/';
		}, 2000);
	};
	let email = 'testuser@gmail.com';
	let password = '11223344';
</script>

<section class="flex-grow flex items-center justify-center">
	<PageFly x="-800">
		<form class="flex flex-col bg-DarkViolet p-8 rounded-xl gap-4" action="submit">
			<p class="text-white text-2xl">Sign In</p>
			<input bind:value={email} class="p-2 rounded-md" placeholder="Email" type="email" />
			<input bind:value={password} class="p-2 rounded-md" placeholder="Password" type="password" />
			<ButtonCyan bind:onClick classes="py-2">
				{#if loading}
					<div class="flex justify-center items-center text-2xl">
						<Icon icon="eos-icons:bubble-loading" />
					</div>
				{:else}
					Sign In
				{/if}
			</ButtonCyan>
		</form>
	</PageFly>
</section>

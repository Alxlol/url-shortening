<script>
	import Icon from '@iconify/svelte';
	import PageWrapper from '../page-wrapper.svelte';
	import { fly } from 'svelte/transition';
	import ButtonCyan from '../button-cyan.svelte';

	let toggleMenu = false;
</script>

<PageWrapper>
	<nav class="flex justify-between items-center py-4">
		<div class="flex items-center gap-12">
			<p class="font-bold text-2xl text-VeryDarkBlue">Shortly</p>
			<ul class="gap-6 hidden lg:flex">
				<a class="text-gray-500 hover:text-gray-900" href="/">Features</a>
				<a class="text-gray-500 hover:text-gray-900" href="/">Pricing</a>
				<a class="text-gray-500 hover:text-gray-900" href="/">Resources</a>
			</ul>
		</div>
		<div class="hidden lg:flex gap-4">
			<button class="text-gray-500 hover:text-gray-900 text-sm">Login</button>
			<ButtonCyan classes="py-2 px-4 text-sm">Sign Up</ButtonCyan>
		</div>
		<div class="lg:hidden">
			<button
				on:click={() => {
					toggleMenu = !toggleMenu;
				}}
			>
				<Icon width="34" height="34" icon="ci:hamburger-lg" />
			</button>
		</div>
	</nav>
	{#if toggleMenu}
		<div
			in:fly={{ duration: 200, y: -50 }}
			class="bg-DarkViolet text-white rounded-md flex flex-col items-center p-4 gap-4 lg:hidden"
		>
			<a class="" href="/">Features</a>
			<a class="" href="/">Pricing</a>
			<a class="" href="/">Resources</a>
			<hr class="w-full" />
			<button class=" text-sm">Login</button>
			<ButtonCyan classes="py-2 px-4 text-sm">Sign Up</ButtonCyan>
		</div>
	{/if}
</PageWrapper>

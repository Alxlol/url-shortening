<script>
	import '../app.css';
	import Navbar from '../lib/components/navbar/navbar.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<slot />
</div>

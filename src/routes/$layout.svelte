<script lang="ts">
	import Alert from '$lib/Alert.svelte';
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
	<title>Visual Participation Analytics (ViPA)</title>
</svelte:head>

<Nav />
<Alert />
<main class="max-w-full px-6 py-6">
	<slot />
</main>
<Footer />

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

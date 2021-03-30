<script lang="ts">
	import { onMount } from 'svelte';

	import Contribution from '$lib/Contribution.svelte';
	import { contributions, ws } from '../stores';

	async function fetchContributions() {
		const url: string = 'http://127.0.0.1:3010/api/v1/datasets/liqd_mauerpark.sqlite/contributions';
		const res: Response = await fetch(url);
		if (res.ok) {
			$contributions = await res.json();
		} else {
			throw new Error(`Could not load ${url}`);
		}
	}

	onMount(() => {
		fetchContributions();
	});
</script>

<h1 class="text-3xl font-bold text-gray-900 mb-2">Home</h1>
<button
	type="button"
	class="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
	on:click={() => {
		ws.send('job_rand_sleep');
	}}>Send</button
>
<button
	type="button"
	class="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
	on:click={() => {
		ws.close();
	}}>Close</button
>

<p class="mt-2">
	{$ws}
</p>

{#each $contributions as contribution}
	<Contribution {contribution} />
{:else}
	Loading...
{/each}

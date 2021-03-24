<script lang="ts">
	import { onMount } from 'svelte';

	import type { ContributionType } from '../types/contribution.type';

	import Contribution from '$lib/Contribution.svelte';
	import { incomingWebSocketMessage } from '../stores';
	import { createWebSocket } from '../webSocket';

	let contributions: ContributionType[] = [];
	let ws: WebSocket;

	async function fetchContributions() {
		const url: string =
			'http://127.0.0.1:3010/api/v1/datasets/liqd_mauerpark.sqlite/contributions';
		const res: Response = await fetch(url);
		if (res.ok) {
			contributions = await res.json();
		} else {
			throw new Error(`Could not load ${url}`);
		}
	}

	onMount(() => {
		fetchContributions();
		ws = createWebSocket('ws://127.0.0.1:3020', incomingWebSocketMessage);
	});
</script>

<h1 class="text-3xl font-bold text-gray-900">Home</h1>
<button
	type="button"
	class="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
	on:click={() => {
		ws.send('job_rand_sleep');
	}}>click</button
>

{#each contributions as contribution}
	<Contribution {contribution} />
{:else}
	Loading...
{/each}

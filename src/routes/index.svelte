<script lang="ts">
	import { onMount } from 'svelte';
	import { incomingWebSocketMessage } from '../stores';
	import { createWebSocket } from '../webSocket';

	let ws: WebSocket;
	onMount(() => {
		ws = createWebSocket('ws://127.0.0.1:3020', incomingWebSocketMessage);
	});
</script>

<h1 class="text-3xl font-bold text-gray-900">Home</h1>
<p>
	<button
		type="button"
		class="btn"
		on:click={() => {
			ws.send('job_rand_sleep');
		}}>click</button
	>
</p>

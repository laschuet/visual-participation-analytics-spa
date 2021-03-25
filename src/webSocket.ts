import type { Writable } from "svelte/store";

export function createWebSocket(url: string, store: Writable<string>) {
	const ws = new WebSocket(url);

	function handleClose() {
		console.log('WebSocket connection has been closed');
	};

	function handleError() {};

	function handleMessage(event: MessageEvent) {
		store.set(event.data);
		console.log(event.data);
	};

	function handleOpen() {
		console.log('WebSocket connection has been opened');
	};

	ws.addEventListener('close', handleClose);
	ws.addEventListener('error', handleError);
	ws.addEventListener('message', handleMessage);
	ws.addEventListener('open', handleOpen);

	return ws;
};

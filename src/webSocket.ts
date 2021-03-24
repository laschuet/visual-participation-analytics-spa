import type { Writable } from "svelte/store";

export const createWebSocket = (url: string, store: Writable<string>) => {
	const ws = new WebSocket(url);

	const handleClose = () => {
		console.log('WebSocket connection has been closed');
	};

	const handleError = () => {};

	const handleMessage = (event: MessageEvent) => {
		store.set(event.data);
		console.log(event.data);
	};

	const handleOpen = () => {
		console.log('WebSocket connection has been opened');
	};

	ws.addEventListener('close', handleClose);
	ws.addEventListener('error', handleError);
	ws.addEventListener('message', handleMessage);
	ws.addEventListener('open', handleOpen);

	return ws;
};

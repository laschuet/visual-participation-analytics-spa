import { writable } from 'svelte/store';

export const alertMessage = writable<string>('');
export const incomingWebSocketMessage = writable<string>('', null);

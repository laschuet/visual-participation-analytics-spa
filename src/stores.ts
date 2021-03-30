import { writable } from 'svelte/store';

import type { ContributionType } from './types/contribution.type';

import { createWebSocketStore } from './utils';

export const alertMessage = writable<string>('');
export const contributions = writable<ContributionType[]>([]);
export const ws = createWebSocketStore('ws://127.0.0.1:3020', '');

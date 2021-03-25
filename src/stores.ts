import { writable } from 'svelte/store';

import type { ContributionType } from './types/contribution.type';

export const alertMessage = writable<string>('');
export const incomingWebSocketMessage = writable<string>('');
export const contributions = writable<ContributionType[]>([]);

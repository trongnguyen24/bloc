import { writable } from 'svelte/store';
import { error } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

import { serializeNonPOJOs } from '$lib/utils';

export const cat = writable('');

export const lang = writable('vn');
export const blocStore = writable('');
export const catStore = writable('');

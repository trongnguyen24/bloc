import { writable } from 'svelte/store';

const blocres = await fetch('https://api.baotangtohuu.org/api/collections/bloc/records?perPage=1000');
const catres = await fetch('https://api.baotangtohuu.org/api/collections/blocCat/records?perPage=1000');
const albumres = await fetch('https://api.baotangtohuu.org/api/collections/album/records?perPage=1000');


const blocjson = await blocres.json();
const catjson = await catres.json();
const albumjson = await albumres.json();

export const cat = writable('');
export const lang = writable('vn');
export const blocStore = writable(blocjson);
export const catStore = writable(catjson);
export const albumStore = writable(albumjson);

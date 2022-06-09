import { writable } from 'svelte/store';

export const promise = writable(undefined);

export const chosen_video = writable();

export const video_player_is_active = writable(false);
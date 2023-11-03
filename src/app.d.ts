// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/*' {
	var meta;
	export default meta;
}

declare module 'svelte-carousel';

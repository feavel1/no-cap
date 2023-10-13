import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	const { url } = event;
	return { url: url.pathname };
};

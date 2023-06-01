import type { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
	name: 'Contechia',
	description: 'Descripción de Contechia',
	url: process.env.VERCEL_URL ?? 'https://contechia.vercel.app',
	ogImage: 'https://i.imgur.com/AhynwCl.jpg',
	links: {
		twitter: 'https://twitter.com/contechia',
		github: 'https://github.com/contechia',
	},
};

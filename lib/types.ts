import type { Icons } from '@/components';

export type NavItem = {
	title: string;
	href: string;
	disabled?: boolean;
};

export type MainNavItem = NavItem;

export interface SiteConfig {
	name: string;
	description: string;
	url: string;
	ogImage: string;
	links: {
		twitter: string;
		github: string;
	};
}

export type SidebarNavItem = {
	title: string;
	disabled?: boolean;
	external?: boolean;
	icon?: keyof typeof Icons;
} & (
	| {
			href: string;
			items?: never;
	  }
	| {
			href?: string;
			items: NavItem[];
	  }
);

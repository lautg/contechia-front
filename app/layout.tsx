import '@/app/globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

import { siteConfig } from '@/config/site';

import { MainNav, MainNavActions, ThemeProvider } from '@/components';

import { cn } from '@/lib/utils';
import { MainNavItem } from '@/lib/types';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const calSans = localFont({
	src: '../assets/fonts/CalSans-SemiBold.woff2',
	variable: '--font-heading',
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		'Next.js',
		'React',
		'Tailwind CSS',
		'Server Components',
		'Artificial Intelligence',
		'Machine Learning',
		'Blog',
	],
	authors: [
		{
			name: 'contechia',
			url: 'https://github.com/lautg',
		},
	],
	creator: 'contechia',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	openGraph: {
		type: 'website',
		locale: 'es_ES',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	icons: {
		icon: '/favicon.ico',
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

const navbarItems: MainNavItem[] = [
	{
		title: 'Directorio',
		href: '/directory',
	},
	{
		title: 'Cursos',
		href: '/courses',
	},
	{
		title: 'Foro',
		href: '/forum',
	},
	{
		title: 'Blog',
		href: '/blog',
	},
	{
		title: 'Acerca de',
		href: '/about',
	},
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, calSans.variable)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="flex min-h-screen flex-col space-y-6">
						<header className="sticky top-0 z-40 border-b bg-background">
							<div className="container flex h-16 items-center justify-between py-4">
								<MainNav items={navbarItems} />
								<MainNavActions />
							</div>
						</header>
						<div className="container mx-auto">
							<main className="flex-grow gap-8">{children}</main>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}

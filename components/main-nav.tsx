'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { siteConfig } from '@/config/site';

import { Icons, LanguageToggler, MobileNav, ThemeToggler } from '@/components';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import type { MainNavItem } from '@/lib/types';

interface MainNavProps {
	items?: MainNavItem[];
	children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
	const segment = useSelectedLayoutSegment();
	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="hidden items-center space-x-2 md:flex">
				<Icons.Logo />
				<span className="hidden font-bold uppercase sm:inline-block">{siteConfig.name}</span>
			</Link>
			{items?.length ? (
				<nav className="hidden gap-6 md:flex">
					{items?.map((item, index) => (
						<Link
							key={index}
							href={item.disabled ? '#' : item.href}
							className={cn(
								'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
								item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
								item.disabled && 'cursor-not-allowed opacity-80',
							)}
						>
							{item.title}
						</Link>
					))}
				</nav>
			) : null}
			<button
				className="flex items-center space-x-2 md:hidden"
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			>
				{showMobileMenu ? <Icons.Close /> : <Icons.Logo />}
				<span className="font-bold">Menu</span>
			</button>
			{showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
		</div>
	);
}

export function MainNavActions() {
	return (
		<div className="flex items-center justify-center gap-x-2">
			<ThemeToggler />
			<LanguageToggler />
			<Button variant="secondary" className="ml-2" asChild>
				<Link href="/login">Acceder</Link>
			</Button>
		</div>
	);
}

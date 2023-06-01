'use client';

import { useState } from 'react';

import { Icons } from '@/components';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type Layout = 'grid' | 'list';
type SortBy = 'date' | 'alphabet';

export const ButtonFilters: React.FC<{ className?: string }> = ({ className }) => {
	const [layout, setLayout] = useState<Layout>('grid');
	const [sortBy, setSortBy] = useState<SortBy>('date');
	const [reversed, setReversed] = useState(false);

	return (
		<div className={cn('flex gap-x-1 md:gap-x-2', className)}>
			<Button variant="outline" onClick={() => setLayout((previous) => (previous === 'grid' ? 'list' : 'grid'))}>
				{layout === 'grid' ? (
					<Icons.LayoutGrid className="h-4 w-4" />
				) : (
					<Icons.LayoutList className="h-4 w-4" />
				)}
			</Button>
			<Button variant="outline" onClick={() => setReversed((previous) => !previous)}>
				{reversed ? (
					<Icons.ArrowDownNarrowWide className="h-4 w-4" />
				) : (
					<Icons.ArrowDownWideNarrow className="h-4 w-4" />
				)}
			</Button>
			<Button
				variant="outline"
				onClick={() => setSortBy((previous) => (previous === 'date' ? 'alphabet' : 'date'))}
			>
				{sortBy === 'date' ? (
					<Icons.CalendarDays className="h-4 w-4" />
				) : (
					<Icons.ArrowDownAZ className="h-4 w-4" />
				)}
			</Button>
		</div>
	);
};

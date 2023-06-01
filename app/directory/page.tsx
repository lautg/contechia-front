'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Metadata } from 'next';

import { Icons } from '@/components';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { getDirectoryRecent } from '@/mocks/directory-recent';
import { cn } from '@/lib/utils';

type Layout = 'grid' | 'list';
type SortBy = 'date' | 'alphabet';

export const metadata: Metadata = {
	title: 'Directorio',
	description: 'Directorio de herramientas para desarrolladores',
};

const DirectoryPage = () => {
	return (
		<div className="flex flex-col gap-y-1 px-0 md:gap-y-2">
			<div className="flex gap-x-1 md:hidden md:gap-x-2">
				<SearchInput />
				<ButtonFilters />
			</div>
			<div className="flex w-full gap-x-1 md:gap-x-2">
				<SearchInput className="hidden md:block" />
				<Select>
					<SelectTrigger>
						<SelectValue placeholder="Categorías" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="marketing">Marketing</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger>
						<SelectValue placeholder="Precio" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="free">Gratis</SelectItem>
						<SelectItem value="freemium">Freemium</SelectItem>
						<SelectItem value="free-trial">Free Trial</SelectItem>
						<SelectItem value="paid">Pago</SelectItem>
					</SelectContent>
				</Select>
				<ButtonFilters className="hidden md:flex" />
			</div>

			<Tabs defaultValue="recent">
				<TabsList className="flex w-full">
					<TabsTrigger value="recent" className="w-full">
						Reciente
					</TabsTrigger>
					<TabsTrigger value="popular" className="w-full">
						Popular
					</TabsTrigger>
					<TabsTrigger value="calification" className="w-full">
						Calificación
					</TabsTrigger>
				</TabsList>

				<TabsContent value="recent" className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3">
					{getDirectoryRecent().map((item, index) => (
						<Card key={item.id} className="flex flex-col">
							<CardHeader className="px-4 pb-2 pt-4 sm:px-6 sm:pb-4 sm:pt-6">
								<CardTitle>{item.title}</CardTitle>
								<CardDescription>
									{item.shortDescription.length > 182
										? item.shortDescription.slice(0, 182) + '...'
										: item.shortDescription}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex items-center justify-center px-4 pb-4 pt-0 sm:px-6 sm:pb-6">
								<Image
									src={item.image}
									alt={item.title}
									width={400}
									height={200}
									className="rounded-md"
									priority={index <= 3}
								/>
							</CardContent>
						</Card>
					))}
				</TabsContent>
				<TabsContent value="popular">Change your password here.</TabsContent>
				<TabsContent value="calification">Change your password here.</TabsContent>
			</Tabs>
		</div>
	);
};

const SearchInput: React.FC<{ className?: string }> = ({ className }) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('submit');
	};

	return (
		<form onSubmit={handleSubmit} className={cn('relative flex w-full', className)}>
			<Input placeholder="Buscar" />
			<Button type="submit" variant="link" className="absolute right-0 top-0 h-full w-10 px-0">
				<Icons.Search className="h-4 w-4 text-muted-foreground/70" />
			</Button>
		</form>
	);
};

const ButtonFilters: React.FC<{ className?: string }> = ({ className }) => {
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

export default DirectoryPage;

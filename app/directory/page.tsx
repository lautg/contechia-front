import Image from 'next/image';
import type { Metadata } from 'next';

import { ButtonFilters, SearchInput } from '@/components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { getDirectoryRecent } from '@/mocks/directory-recent';

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

export default DirectoryPage;

'use client';

import { Icons } from '@/components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { cn } from '@/lib/utils';

export const SearchInput: React.FC<{ className?: string }> = ({ className }) => {
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

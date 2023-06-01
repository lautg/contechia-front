import { Icons } from '@/components';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageToggler() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-9 w-9 px-0">
					<Icons.Languages />
					<span className="sr-only">Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => {}}>
					<Icons.Languages className="mr-2 h-4 w-4" />
					<span>Español</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => {}}>
					<Icons.Languages className="mr-2 h-4 w-4" />
					<span>English</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => {}}>
					<Icons.Languages className="mr-2 h-4 w-4" />
					<span>Etc...</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

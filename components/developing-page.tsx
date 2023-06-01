'use client';

import { usePathname } from 'next/navigation';

import { Icons } from '@/components';

export function DevelopingPage() {
	const pathname = usePathname();

	return (
		<div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transform">
			<div className="flex flex-col items-center justify-center gap-y-1">
				<p className="text-xl text-gray-700">{pathname}</p>
				<div className="flex items-center justify-center gap-x-2">
					<Icons.TerminalSquare />
					<p className="text-lg">Developing...</p>
				</div>
			</div>
		</div>
	);
}
